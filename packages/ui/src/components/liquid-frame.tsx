"use client";

import { useEffect, useRef } from "react";

import * as THREE from "three";
import clsx from "clsx";

import {
  renderFragmentShader,
  renderVertexShader,
  simulationFragmentShader,
  simulationVertexShader,
} from "../lib/liquid-frame";

type ShaderSource = string;
type Uniform<T> = THREE.IUniform<T>;

type SimUniforms = {
  textureA: Uniform<THREE.Texture | null>;
  mouse: Uniform<THREE.Vector2>;
  resolution: Uniform<THREE.Vector2>;
  time: Uniform<number>;
  frame: Uniform<number>;
};

type RenderUniforms = {
  textureA: Uniform<THREE.Texture | null>;
  textureB: Uniform<THREE.Texture | null>;
  uImageAspect: Uniform<number>;
  uCanvasAspect: Uniform<number>;
  uFit: Uniform<number>;
};

export interface LiquidFrameProps {
  src?: string;
  alt?: string;
  className?: string;
  fit?: "cover" | "contain";
}

export function LiquidFrame({
  src = "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5",
  alt = "Liquid Frame",
  className,
  fit = "cover",
}: LiquidFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !src) return;

    const container = containerRef.current;

    // ---------------------------
    // Renderer
    // ---------------------------
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    Object.assign(renderer.domElement.style, {
      position: "absolute",
      inset: "0",
      width: "100%",
      height: "100%",
      opacity: "0",
      transition: "opacity 0.4s ease",
    });

    // ---------------------------
    // Scene
    // ---------------------------
    const scene = new THREE.Scene();
    const simScene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 5);

    const mouse = new THREE.Vector2();
    let frame = 0;

    const getSize = () => ({
      w: container.clientWidth,
      h: container.clientHeight,
    });

    let { w, h } = getSize();
    renderer.setSize(w, h);

    // ---------------------------
    // Render Targets
    // ---------------------------
    const options: THREE.RenderTargetOptions = {
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: false,
      stencilBuffer: false,
    };

    let rtA = new THREE.WebGLRenderTarget(
      w * window.devicePixelRatio,
      h * window.devicePixelRatio,
      options
    );

    let rtB = new THREE.WebGLRenderTarget(
      w * window.devicePixelRatio,
      h * window.devicePixelRatio,
      options
    );

    // ---------------------------
    // Simulation Material
    // ---------------------------
    const simMaterial = new THREE.ShaderMaterial({
      uniforms: {
        textureA: { value: null },
        mouse: { value: mouse },
        resolution: {
          value: new THREE.Vector2(
            w * window.devicePixelRatio,
            h * window.devicePixelRatio
          ),
        },
        time: { value: 0 },
        frame: { value: 0 },
      },
      vertexShader: simulationVertexShader as ShaderSource,
      fragmentShader: simulationFragmentShader as ShaderSource,
    });
    const simUniforms = simMaterial.uniforms as SimUniforms;

    // ---------------------------
    // Texture Load
    // ---------------------------
    const textureLoader = new THREE.TextureLoader();

    const renderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        textureA: { value: null },
        textureB: { value: null },
        uImageAspect: { value: 1 },
        uCanvasAspect: { value: w / h },
        uFit: { value: fit === "cover" ? 0 : 1 },
      },
      vertexShader: renderVertexShader as ShaderSource,
      fragmentShader: renderFragmentShader as ShaderSource,
      transparent: true,
    });
    const renderUniforms = renderMaterial.uniforms as RenderUniforms;

    const imageTexture = textureLoader.load(src, (tex) => {
      const img = tex.image as HTMLImageElement;

      if (img?.width && img?.height) {
        const imageAspect = img.width / img.height;
        const canvasAspect = container.clientWidth / container.clientHeight;

        renderUniforms.uImageAspect.value = imageAspect;
        renderUniforms.uCanvasAspect.value = canvasAspect;

        container.style.aspectRatio = `${img.width} / ${img.height}`;
      }

      renderUniforms.textureB.value = tex;

      renderer.domElement.style.opacity = "1";
    });

    imageTexture.minFilter = THREE.LinearFilter;
    imageTexture.magFilter = THREE.LinearFilter;

    // ---------------------------
    // Meshes
    // ---------------------------
    const plane = new THREE.PlaneGeometry(2, 2);
    const simQuad = new THREE.Mesh(plane, simMaterial);
    const renderQuad = new THREE.Mesh(plane, renderMaterial);

    simScene.add(simQuad);
    scene.add(renderQuad);

    // ---------------------------
    // Resize
    // ---------------------------
    const handleResize = () => {
      const size = getSize();
      w = size.w;
      h = size.h;

      renderer.setSize(w, h);

      const cw = w * window.devicePixelRatio;
      const ch = h * window.devicePixelRatio;

      rtA.setSize(cw, ch);
      rtB.setSize(cw, ch);

      simUniforms.resolution.value.set(cw, ch);
      renderUniforms.uCanvasAspect.value = w / h;
    };

    window.addEventListener("resize", handleResize);

    // ---------------------------
    // Mouse
    // ---------------------------
    const handleMouseMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = rect.height - (e.clientY - rect.top);

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouse.x = x * window.devicePixelRatio;
        mouse.y = y * window.devicePixelRatio;
      } else {
        mouse.set(0, 0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // ---------------------------
    // Animation
    // ---------------------------
    let rafId = 0;

    const animate = () => {
      simUniforms.frame.value = frame++;
      simUniforms.time.value = performance.now() / 1000;

      simUniforms.textureA.value = rtA.texture;
      renderer.setRenderTarget(rtB);
      renderer.render(simScene, camera);

      renderUniforms.textureA.value = rtB.texture;
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);

      [rtA, rtB] = [rtB, rtA];

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);

      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);

      renderer.dispose();
      rtA.dispose();
      rtB.dispose();
      simMaterial.dispose();
      renderMaterial.dispose();
      plane.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [src, fit]);

  return (
    <div
      ref={containerRef}
      className={clsx(
        className,
        "relative h-full w-full overflow-hidden rounded-2xl border bg-transparent md:max-w-4xl"
      )}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        aspectRatio: "16 / 9",
        overflow: "hidden",
        background: "transparent",
      }}
    />
  );
}
