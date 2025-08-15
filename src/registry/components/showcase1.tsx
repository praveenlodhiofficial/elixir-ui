'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/registry/lib/utils'

const showcaseVariants = cva('z-20 h-full', {
     variants: {
          size: {
               sm: 'h-64 w-64',
               md: 'h-80 w-80',
               lg: 'h-96 w-96',
               xl: 'h-[500px] w-[500px]',
               full: 'h-full w-full',
          },
          variant: {
               default: '',
               rounded: 'rounded-lg',
               circular: 'rounded-full',
          },
     },
     defaultVariants: {
          size: 'full',
          variant: 'default',
     },
})

interface Showcase1Props extends VariantProps<typeof showcaseVariants> {
     imageSrc: string
     text: string
     fontSize?: string
     fontFamily?: string
     textColor?: string
     className?: string
     rotationSpeed?: number
     bloomIntensity?: number
     enableControls?: boolean
}

function ShowcaseScene({
     imageSrc,
     text,
     fontSize = '40px',
     fontFamily = 'Times New Roman',
     textColor = '#F6F77D',
     rotationSpeed = 0.006,
     bloomIntensity = 3,
     enableControls = true,
}: Showcase1Props) {
     const tex = useTexture(imageSrc)

     // Adjust texture settings
     tex.anisotropy = 20
     tex.minFilter = THREE.LinearFilter
     tex.magFilter = THREE.LinearFilter

     const hollowCylindrical = useRef<THREE.Mesh>(null)

     useFrame(() => {
          if (hollowCylindrical.current) {
               hollowCylindrical.current.rotation.y += rotationSpeed
          }
     })

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
                              image={createTextTexture({ text, fontSize, fontFamily, textColor })}
                         />
                    </spriteMaterial>
               </sprite>
          </>
     )
}

export default function Showcase1({
     size,
     variant,
     className,
     ...props
}: Showcase1Props) {
     return (
          <Canvas
               flat
               camera={{ fov: 45 }}
               className={cn(showcaseVariants({ size, variant }), className)}
          >
               <ShowcaseScene {...props} />
          </Canvas>
     )
}

interface TextTextureProps {
     text: string
     fontSize: string
     fontFamily: string
     textColor: string
}

export const createTextTexture = ({ text, fontSize, fontFamily, textColor }: TextTextureProps) => {
     const canvas = document.createElement('canvas')
     const context = canvas.getContext('2d')
     if (context) {
          context.font = `${fontSize} ${fontFamily}`
          context.fillStyle = textColor
          context.textAlign = 'center'
          context.fillText(text, canvas.width / 2, canvas.height / 4)
     }
     return canvas
}
