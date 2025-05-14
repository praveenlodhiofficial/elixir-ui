//  showcase.tsx

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

interface ShowcaseComponentProps {
  imageSrc: string;
  text: string;
  fontSize?: string;
  fontFamily?: string;
  textColor?: string;
}

function ShowcaseScene({
  imageSrc,
  text,
  fontSize = '40px',
  fontFamily = 'Times New Roman',
  textColor = '#F6F77D',
}: ShowcaseComponentProps) {
  const tex = useTexture(imageSrc);

  // Adjust texture settings
  tex.anisotropy = 20;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;

  const hollowCylindrical = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (hollowCylindrical.current) {
      hollowCylindrical.current.rotation.y += 0.006;
    }
  });

  return (
    <>
      <ambientLight />
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={3}
          luminanceThreshold={0.6}
          luminanceSmoothing={0.1}
        />
      </EffectComposer>
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        minPolarAngle={Math.PI / 16}
        maxPolarAngle={Math.PI}
      />
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
            image={createTextTexture({ text, fontSize, fontFamily, textColor })}
          />
        </spriteMaterial>
      </sprite>
    </>
  );
}

export default function ShowcaseComponent(props: ShowcaseComponentProps) {
  return (
    <div className='w-full h-[60vh]'>
      <Canvas flat camera={{ fov: 45 }} className='z-50'>
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

export const createTextTexture = ({
  text,
  fontSize,
  fontFamily,
  textColor,
}: TextTextureProps) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (context) {
    context.font = `${fontSize} ${fontFamily}`;
    context.fillStyle = textColor;
    context.textAlign = 'center';
    context.fillText(text, canvas.width / 2, canvas.height / 4);
  }
  return canvas;
};