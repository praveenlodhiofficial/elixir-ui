"use client";

import React, { useMemo, useRef } from "react";

import * as THREE from "three";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import clsx from "clsx";

export interface FunnelGalleryProps {
  images?: string[];
  text?: string;
  fontSize?: string;
  fontFamily?: string;
  textColor?: string;
  className?: string;
  rotationSpeed?: number;
  bloomIntensity?: number;
  enableControls?: boolean;
}

const defaultImages = [
  "https://images.unsplash.com/photo-1546636889-ba9fdd63583e",
  "https://images.unsplash.com/photo-1562797807-aa9baed9a414",
  "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1",
];

function FunnelGalleryScene({
  images = defaultImages,
  text = "Funnel Gallery",
  fontSize = "250px",
  fontFamily = "Times New Roman",
  textColor = "#F6F77D",
  rotationSpeed = 0.006,
  bloomIntensity = 3,
  enableControls = true,
}: FunnelGalleryProps) {
  const safeImages = images.slice(0, 3);
  const textures = useTexture(safeImages) as THREE.Texture[];

  /* -------- TEXTURE QUALITY -------- */
  textures.forEach((tex) => {
    tex.anisotropy = 20;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = true;
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
  });

  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  /* -------- TEXT TEXTURE FIX -------- */
  const textTexture = useMemo(() => {
    const canvas = createTextTexture({
      text,
      fontSize,
      fontFamily,
      textColor,
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    return texture;
  }, [text, fontSize, fontFamily, textColor]);

  /* -------- FUNNEL CONFIG -------- */
  const topRadius = 0.9;
  const bottomRadius = 1.8;
  const segments = safeImages.length;

  const isWide = segments <= 2;
  const aspectRatio = isWide ? 9 / 16 : 4 / 5;

  const panelWidth = 1.5;
  const height = panelWidth * aspectRatio;

  const angleStep =
    segments === 1 ? Math.PI * 2 : segments === 2 ? Math.PI : (Math.PI * 2) / 3;

  return (
    <>
      {/* LIGHT */}
      <ambientLight intensity={3} />
      <directionalLight position={[2, 3, 2]} intensity={1} />

      {/* BLOOM */}
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={bloomIntensity}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.15}
        />
      </EffectComposer>

      {/* CONTROLS */}
      {enableControls && (
        <OrbitControls
          enableZoom
          enablePan
          minPolarAngle={Math.PI / 16}
          maxPolarAngle={Math.PI}
        />
      )}

      {/* FUNNEL */}
      <group ref={groupRef} rotation={[0.2, 2, 0.3]}>
        {textures.map((tex, index) => {
          const gap = 0.25;
          const thetaLength = angleStep - gap;
          const thetaStart = index * angleStep;

          return (
            <mesh key={index}>
              <cylinderGeometry
                args={[
                  topRadius,
                  bottomRadius,
                  height,
                  100,
                  1,
                  true,
                  thetaStart,
                  thetaLength,
                ]}
              />
              <meshStandardMaterial
                map={tex}
                side={THREE.DoubleSide}
                roughness={0.3}
                metalness={0.1}
              />
            </mesh>
          );
        })}
      </group>

      {/* TEXT (FIXED) */}
      <sprite position={[0, height / 2 + 0.6, 0]}>
        <spriteMaterial map={textTexture} />
      </sprite>
    </>
  );
}

export function FunnelGallery({ className, ...props }: FunnelGalleryProps) {
  return (
    <div
      className={clsx(
        "h-[70vh] w-full overflow-clip rounded-lg border bg-black/5 shadow-xl brightness-120 contrast-110 saturate-120 md:rounded-xl lg:max-w-[60vw] lg:rounded-2xl dark:border-zinc-800 dark:bg-black",
        className
      )}
    >
      <Canvas dpr={[1, 2]} camera={{ fov: 47 }} className="h-full w-full">
        <FunnelGalleryScene {...props} />
      </Canvas>
    </div>
  );
}

/* -------- TEXT GENERATOR -------- */
function createTextTexture({
  text,
  fontSize,
  fontFamily,
  textColor,
}: {
  text: string;
  fontSize: string;
  fontFamily: string;
  textColor: string;
}) {
  const canvas = document.createElement("canvas");

  canvas.width = 1920;
  canvas.height = 1080;

  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${fontSize} ${fontFamily}`;
    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  }

  return canvas;
}
