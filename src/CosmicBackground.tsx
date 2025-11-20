import { useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Stars() {
  const ref = React.useRef<THREE.Points>(null);

  const [positions, colors] = React.useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    const colors = new Float32Array(5000 * 3);

    for (let i = 0; i < 5000; i++) {
      const radius = 150;
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

    return [positions, colors];
  }, []);

  useFrame((_state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta * 0.05;
    ref.current.rotation.y -= delta * 0.07;
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
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

export default function CosmicBackground() {
  const [showCanvas, setShowCanvas] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)"); // tablets & phones
    const update = () => setShowCanvas(!mq.matches);

    update(); // initial check
    mq.addEventListener("change", update);

    return () => mq.removeEventListener("change", update);
  }, []);

  // Disable 3D canvas on phones — rely on neo-bg only
  if (!showCanvas) return null;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 50], fov: 75 }} dpr={[1, 2]}>
        <Stars />
      </Canvas>
    </div>
  );
}
