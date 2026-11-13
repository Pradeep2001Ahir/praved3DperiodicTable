import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Text, Float } from '@react-three/drei';
import { getCategory } from '../data/elements';

// Different geometry by category/state so elements visually differ.
function Model({ el }) {
  const cat = getCategory(el.cat);
  const color = cat.color;
  const isGas = el.state.includes('Gas');
  const isLiquid = el.state.includes('Liquid');

  if (isGas) {
    // Gas molecule: two bonded spheres
    return (
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <group>
          <Sphere args={[0.7, 32, 32]} position={[-0.55, 0, 0]}>
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} roughness={0.3} />
          </Sphere>
          <Sphere args={[0.7, 32, 32]} position={[0.55, 0, 0]}>
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} roughness={0.3} />
          </Sphere>
        </group>
      </Float>
    );
  }

  if (isLiquid) {
    // Liquid: flattened sphere
    return (
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.3}>
        <Sphere args={[1, 64, 64]} scale={[1, 0.6, 1]}>
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.3} />
        </Sphere>
      </Float>
    );
  }

  // Solid: crystalline cluster (metals get metallic, else matte)
  const metalness = ['transition', 'alkali', 'alkaline', 'post', 'lanthanide', 'actinide'].includes(el.cat) ? 0.9 : 0.2;
  const roughness = metalness > 0.5 ? 0.15 : 0.7;
  return (
    <group>
      {[
        [0, 0, 0],
        [1.1, 0.2, 0],
        [-1.1, 0.2, 0],
        [0.55, 1.05, 0.4],
        [-0.55, 1.05, 0.4],
        [0.55, -1.05, 0.4],
        [-0.55, -1.05, 0.4],
      ].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <octahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color={color}
            metalness={metalness}
            roughness={roughness}
            emissive={color}
            emissiveIntensity={0.15}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function MaterialModel3D({ element }) {
  const cat = getCategory(element.cat);
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]} shadows>
      <color attach="background" args={['#050914']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
      <pointLight position={[-5, -2, 3]} intensity={0.8} color={cat.color} />
      <Suspense fallback={null}>
        <Model el={element} />
        <Text position={[0, -2.2, 0]} fontSize={0.35} color={cat.color} anchorX="center">
          {element.sym} · {element.name}
        </Text>
        <Text position={[0, -2.75, 0]} fontSize={0.16} color="#94a3b8" anchorX="center">
          {cat.name} — {element.state}
        </Text>
      </Suspense>
      <OrbitControls enablePan={false} autoRotate autoRotateSpeed={1.2} minDistance={2.5} maxDistance={10} />
    </Canvas>
  );
}