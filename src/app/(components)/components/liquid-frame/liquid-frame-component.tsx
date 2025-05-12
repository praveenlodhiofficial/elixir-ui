// liquid-frame.tsx

'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Image from 'next/image';
import {
  simulationVertexShader,
  simulationFragmentShader,
  renderVertexShader,
  renderFragmentShader,
} from '@/lib/shaders';

// Define shader types (assuming shaders are strings)
type ShaderSource = string;

// Ensure shader imports are treated as strings
interface ShaderImports {
  simulationVertexShader: ShaderSource;
  simulationFragmentShader: ShaderSource;
  renderVertexShader: ShaderSource;
  renderFragmentShader: ShaderSource;
}

interface Props {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

interface Dimensions {
  width: number;
  height: number;
}

export default function LiquidFrameComponent({
  src,
  alt = 'Image with water effect',
  width = 500,
  height = 300,
  className = '',
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({ width, height });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Load image to get natural dimensions
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      const aspectRatio = img.naturalWidth / img.naturalHeight;

      // Calculate dimensions to maintain aspect ratio
      let newWidth = width;
      let newHeight = height;

      // If width is provided, adjust height to maintain aspect ratio
      if (width) {
        newHeight = width / aspectRatio;
      }
      // If height is provided and no width, adjust width to maintain aspect ratio
      else if (height) {
        newWidth = height * aspectRatio;
      }
      // If both are provided, use the one that fits within bounds
      else if (width && height) {
        newHeight = width / aspectRatio;
        if (newHeight > height) {
          newHeight = height;
          newWidth = height * aspectRatio;
        }
      }

      // Update dimensions
      setDimensions({
        width: newWidth,
        height: newHeight,
      });

      // Setup Three.js
      const scene = new THREE.Scene();
      const simScene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
      });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(newWidth, newHeight);
      container.appendChild(renderer.domElement);

      // Initialize variables
      const mouse = new THREE.Vector2();
      let frame = 0;

      const canvasWidth = newWidth * window.devicePixelRatio;
      const canvasHeight = newHeight * window.devicePixelRatio;

      const options: THREE.RenderTargetOptions = {
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        stencilBuffer: false,
        depthBuffer: false,
      };

      let rtA = new THREE.WebGLRenderTarget(canvasWidth, canvasHeight, options);
      let rtB = new THREE.WebGLRenderTarget(canvasWidth, canvasHeight, options);

      // Create simulation material
      const simMaterial = new THREE.ShaderMaterial({
        uniforms: {
          textureA: { value: null as THREE.Texture | null },
          mouse: { value: mouse },
          resolution: { value: new THREE.Vector2(canvasWidth, canvasHeight) },
          time: { value: 0 },
          frame: { value: 0 },
        },
        vertexShader: simulationVertexShader as ShaderSource,
        fragmentShader: simulationFragmentShader as ShaderSource,
      });

      // Load the specified image
      const textureLoader = new THREE.TextureLoader();
      const imageTexture = textureLoader.load(src);

      imageTexture.minFilter = THREE.LinearFilter;
      imageTexture.magFilter = THREE.LinearFilter;
      imageTexture.format = THREE.RGBAFormat;

      // Create render material
      const renderMaterial = new THREE.ShaderMaterial({
        uniforms: {
          textureA: { value: null as THREE.Texture | null },
          textureB: { value: imageTexture },
        },
        vertexShader: renderVertexShader as ShaderSource,
        fragmentShader: renderFragmentShader as ShaderSource,
        transparent: true,
      });

      // Create quads
      const plane = new THREE.PlaneGeometry(2, 2);
      const simQuad = new THREE.Mesh(plane, simMaterial);
      const renderQuad = new THREE.Mesh(plane, renderMaterial);
      simScene.add(simQuad);
      scene.add(renderQuad);

      // Handle resize
      const handleResize = () => {
        if (!containerRef.current) return;

        const newRect = containerRef.current.getBoundingClientRect();
        let newWidth = newRect.width;
        let newHeight = newWidth / aspectRatio;

        // If container height is smaller, adjust to fit height
        if (newHeight > newRect.height) {
          newHeight = newRect.height;
          newWidth = newHeight * aspectRatio;
        }

        // Update dimensions for the component
        setDimensions({
          width: newWidth,
          height: newHeight,
        });

        // Update Three.js renderer and materials
        const canvasWidth = newWidth * window.devicePixelRatio;
        const canvasHeight = newHeight * window.devicePixelRatio;

        renderer.setSize(newWidth, newHeight);
        rtA.setSize(canvasWidth, canvasHeight);
        rtB.setSize(canvasWidth, canvasHeight);
        simMaterial.uniforms.resolution.value.set(canvasWidth, canvasHeight);
      };

      window.addEventListener('resize', handleResize);

      // Handle mouse movement relative to container
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = rect.height - (e.clientY - rect.top);

        // Only update if mouse is inside the container
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          mouse.x = x * window.devicePixelRatio;
          mouse.y = y * window.devicePixelRatio;
        } else {
          mouse.set(0, 0);
        }
      };

      // Handle mouse leave
      const handleMouseLeave = () => {
        mouse.set(0, 0);
      };

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);

      // Animation loop
      const animate = () => {
        simMaterial.uniforms.frame.value = frame++;
        simMaterial.uniforms.time.value = performance.now() / 1000;

        simMaterial.uniforms.textureA.value = rtA.texture;
        renderer.setRenderTarget(rtB);
        renderer.render(simScene, camera);

        renderMaterial.uniforms.textureA.value = rtB.texture;
        renderer.setRenderTarget(null);
        renderer.render(scene, camera);

        const temp = rtA;
        rtA = rtB;
        rtB = temp;

        requestAnimationFrame(animate);
      };

      animate();

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);

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
    };

    // Handle image load error
    img.onerror = () => {
      console.error('Failed to load image:', src);
      setDimensions({ width, height }); // Fallback to default dimensions
    };

  }, [src, width, height]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
        overflow: 'hidden',
      }}
    >
      {/* Hidden base image for proper sizing */}
      <div style={{ visibility: 'hidden', position: 'absolute' }}>
        <Image
          src={src}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}








// 