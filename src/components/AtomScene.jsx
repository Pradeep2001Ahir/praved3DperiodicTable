import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Torus, Float } from '@react-three/drei';

function AtomMesh() {
  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <group>
        <Sphere args={[0.5, 32, 32]}>
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={1.2}
            roughness={0.2}
          />
        </Sphere>
        {[0, Math.PI / 3, (2 * Math.PI) / 3].map((rot, i) => (
          <Torus key={i} args={[1.6, 0.015, 16, 128]} rotation={[rot, rot, 0]}>
            <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.6} />
          </Torus>
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const a = (i / 6) * Math.PI * 2;
          return (
            <Sphere key={i} args={[0.08, 16, 16]} position={[Math.cos(a) * 1.6, Math.sin(a) * 1.6, 0]}>
              <meshStandardMaterial color="#67e8f9" emissive="#67e8f9" emissiveIntensity={1.5} />
            </Sphere>
          );
        })}
      </group>
    </Float>
  );
}

export default function AtomScene() {
  return (
    <div className="absolute inset-0 -z-0 opacity-70 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#8b5cf6" />
        <Suspense fallback={null}>
          <AtomMesh />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
}