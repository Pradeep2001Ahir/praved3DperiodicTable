import { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { electronsForShells } from '../utils/shells';
import { getCategory } from '../data/elements';

function Nucleus({ color }) {
  return (
    <group>
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
      </mesh>
    </group>
  );
}

function Shell({ radius, electrons, animated, color }) {
  const group = useRef();
  useFrame((_, dt) => {
    if (animated && group.current) group.current.rotation.y += dt * 0.6;
  });

  const positions = useMemo(() => {
    return Array.from({ length: electrons }).map((_, i) => {
      const a = (i / electrons) * Math.PI * 2;
      return [Math.cos(a) * radius, Math.sin(a) * radius, 0];
    });
  }, [electrons, radius]);

  return (
    <group ref={group}>
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[radius, 0.005, 8, 128]} />
        <meshBasicMaterial color="#334155" />
      </mesh>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} />
        </mesh>
      ))}
    </group>
  );
}

export default function AtomicModel3D({ element }) {
  const [animated, setAnimated] = useState(true);
  const shells = electronsForShells(element.n);
  const color = getCategory(element.cat).color;

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-3 left-3 z-10 text-xs text-slate-400 max-w-[200px]">
        Educational Bohr-style model — electrons shown on shells for teaching purposes only.
      </div>
      <div className="absolute bottom-3 left-3 z-10 flex gap-2">
        <button
          onClick={() => setAnimated((v) => !v)}
          className="px-3 py-1.5 text-xs rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-200"
        >
          {animated ? 'Pause electrons' : 'Animate electrons'}
        </button>
      </div>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]}>
        <color attach="background" args={['#050914']} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <Nucleus color={color} />
        {shells.map((count, i) => (
          <Shell
            key={i}
            radius={1.1 + i * 0.65}
            electrons={count}
            animated={animated}
            color={color}
          />
        ))}
        <Text position={[0, -4, 0]} fontSize={0.28} color={color} anchorX="center">
          {element.sym} · {element.n} protons · {shells.reduce((a, b) => a + b, 0)} electrons
        </Text>
        <OrbitControls enablePan={false} minDistance={3} maxDistance={14} />
      </Canvas>
    </div>
  );
}