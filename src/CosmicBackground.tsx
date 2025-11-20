import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Stars() {
  const pointsRef = useRef<THREE.Points | null>(null);

  const { geometry, material } = useMemo(() => {
    const count = 5000;
    const radius = 150;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const base = 0.8 + Math.random() * 0.2;
      colors[i * 3] = base;
      colors[i * 3 + 1] = base;
      colors[i * 3 + 2] = 1;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    return { geometry, material };
  }, []);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta * 0.05;
      pointsRef.current.rotation.y -= delta * 0.075;
    }
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}

function CosmicDust() {
  const pointsRef = useRef<THREE.Points | null>(null);

  const { geometry, material } = useMemo(() => {
    const count = 2000;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;

      colors[i * 3] = 0.5 + Math.random() * 0.5; // R
      colors[i * 3 + 1] = 0.2 + Math.random() * 0.3; // G
      colors[i * 3 + 2] = 0.8 + Math.random() * 0.2; // B
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    return { geometry, material };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      const t = state.clock.elapsedTime;
      pointsRef.current.rotation.x = t * 0.02;
      pointsRef.current.rotation.z = t * 0.03;
    }
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
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
        camera={{ position: [0, 0, 50], fov: 75 }}
        dpr={[1, 2]}
        style={{
          background:
            "radial-gradient(circle at top, #020617 0%, #050014 40%, #090019 70%, #000000 100%)",
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
