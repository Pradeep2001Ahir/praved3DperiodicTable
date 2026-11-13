import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { getGridPosition, ELEMENTS, getCategory } from '../data/elements';

function ElementBlock3D({ el, onClick }) {
  const { row, col } = getGridPosition(el);
  const cat = getCategory(el.cat);
  const x = (col - 9.5) * 0.9;
  const y = -(row - 5) * 0.9;
  return (
    <group position={[x, y, 0]} onClick={() => onClick?.(el)}>
      <mesh>
        <boxGeometry args={[0.75, 0.75, 0.15]} />
        <meshStandardMaterial
          color={cat.color}
          emissive={cat.color}
          emissiveIntensity={0.25}
          roughness={0.4}
          metalness={0.3}
        />
      </mesh>
      <Text position={[0, 0.08, 0.09]} fontSize={0.22} color="#0b1220" anchorX="center">
        {el.sym}
      </Text>
      <Text position={[0, -0.2, 0.09]} fontSize={0.08} color="#0b1220" anchorX="center">
        {el.n}
      </Text>
    </group>
  );
}

export default function PeriodicTable3D({ onSelect }) {
  return (
    <div className="w-full h-[70vh] rounded-2xl overflow-hidden glass">
      <Canvas camera={{ position: [0, 0, 14], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-10, -10, 5]} intensity={0.6} color="#8b5cf6" />
        <Suspense fallback={null}>
          {ELEMENTS.map((el) => (
            <ElementBlock3D key={el.n} el={el} onClick={onSelect} />
          ))}
        </Suspense>
        <OrbitControls enablePan autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
}