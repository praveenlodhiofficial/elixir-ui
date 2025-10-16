"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

interface ShowcaseProps {
   imageSrc: string;
   text: string;
   fontSize?: string;
   fontFamily?: string;
   textColor?: string;
   className?: string;
   rotationSpeed?: number;
   bloomIntensity?: number;
   enableControls?: boolean;
}

function ShowcaseScene({
   imageSrc,
   text,
   fontSize = "40px",
   fontFamily = "Times New Roman",
   textColor = "#F6F77D",
   rotationSpeed = 0.006,
   bloomIntensity = 3,
   enableControls = true,
}: ShowcaseProps) {
   const tex = useTexture(imageSrc);

   // Adjust texture settings
   tex.anisotropy = 20;
   tex.minFilter = THREE.LinearFilter;
   tex.magFilter = THREE.LinearFilter;

   const hollowCylindrical = useRef<THREE.Mesh>(null);

   useFrame(() => {
      if (hollowCylindrical.current) {
         hollowCylindrical.current.rotation.y += rotationSpeed;
      }
   });

   return (
      <>
         <ambientLight />
         <EffectComposer>
            <Bloom
               mipmapBlur
               intensity={bloomIntensity}
               luminanceThreshold={0.6}
               luminanceSmoothing={0.1}
            />
         </EffectComposer>
         {enableControls && (
            <OrbitControls
               enableZoom={true}
               enablePan={true}
               minPolarAngle={Math.PI / 16}
               maxPolarAngle={Math.PI}
            />
         )}
         <group rotation={[0, 1.5, 0.4]}>
            <mesh ref={hollowCylindrical}>
               <cylinderGeometry args={[1, 1.7, 1.2, 60, 60, true]} />
               <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide} />
            </mesh>
         </group>
         <sprite position={[0, 1, 0.1]}>
            <spriteMaterial attach="material">
               <canvasTexture
                  attach="map"
                  image={createTextTexture({
                     text,
                     fontSize,
                     fontFamily,
                     textColor,
                  })}
               />
            </spriteMaterial>
         </sprite>
      </>
   );
}

export function Showcase({ className, ...props }: ShowcaseProps) {
   return (
      <div className="h-[70vh] w-full overflow-clip rounded-lg border bg-black/5 shadow-xl brightness-120 contrast-110 saturate-120 lg:w-[60vw] dark:border-zinc-800 dark:bg-black">
         <Canvas flat camera={{ fov: 45 }} className={`z-20 h-full w-full ${className || ""}`}>
            <ShowcaseScene {...props} />
         </Canvas>
      </div>
   );
}

interface TextTextureProps {
   text: string;
   fontSize: string;
   fontFamily: string;
   textColor: string;
}

export const createTextTexture = ({ text, fontSize, fontFamily, textColor }: TextTextureProps) => {
   const canvas = document.createElement("canvas");
   const context = canvas.getContext("2d");
   if (context) {
      context.font = `${fontSize} ${fontFamily}`;
      context.fillStyle = textColor;
      context.textAlign = "center";
      context.fillText(text, canvas.width / 2, canvas.height / 4);
   }
   return canvas;
};
