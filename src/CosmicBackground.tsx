// src/CosmicBackground.tsx
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const STAR_COUNT = 3000; // was 5000
const DUST_COUNT = 1200; // was 2000

function Stars() {
  const ref = useRef<THREE.Points | null>(null);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(STAR_COUNT * 3);
    const colors = new Float32Array(STAR_COUNT * 3);

    for (let i = 0; i < STAR_COUNT; i++) {
      const radius = 140;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      // position on a big sphere
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const colorVariation = Math.random();
      const base = 0.8 + colorVariation * 0.2;

      // slightly bluish / violet white
      colors[i * 3] = base;
      colors[i * 3 + 1] = base;
      colors[i * 3 + 2] = 1;
    }

    return [positions, colors] as const;
  }, []);

  useFrame((_state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta * 0.05;
    ref.current.rotation.y -= delta * 0.075;
  });

  return (
    <Points
      ref={ref}
      positions={positions}
      colors={colors}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        vertexColors
        size={2}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function CosmicDust() {
  const ref = useRef<THREE.Points | null>(null);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(DUST_COUNT * 3);
    const colors = new Float32Array(DUST_COUNT * 3);

    for (let i = 0; i < DUST_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;

      colors[i * 3] = 0.5 + Math.random() * 0.5; // R
      colors[i * 3 + 1] = 0.2 + Math.random() * 0.3; // G
      colors[i * 3 + 2] = 0.8 + Math.random() * 0.2; // B
    }

    return [positions, colors] as const;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.02;
    ref.current.rotation.z = t * 0.03;
  });

  return (
    <Points
      ref={ref}
      positions={positions}
      colors={colors}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        vertexColors
        size={1.5}
        sizeAttenuation
        depthWrite={false}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function Scene() {
  return (
    <>
      <Stars />
      <CosmicDust />
    </>
  );
}

export default function CosmicBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 55], fov: 70 }}
        dpr={[1, 1.5]} // limit DPR a bit for phones
      >
        <Scene />
      </Canvas>
    </div>
  );
}
