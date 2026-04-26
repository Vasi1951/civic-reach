import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function RotatingScene() {
  const groupRef = useRef();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Box representing the Ballot Box */}
      <mesh position={[-1.5, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#22d3ee" wireframe />
      </mesh>

      {/* Sphere representing the Voter */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#5e6ad2" />
      </mesh>

      {/* Box representing the Counting / Result */}
      <mesh position={[1.5, 0, 0]}>
        <boxGeometry args={[1.2, 0.5, 1]} />
        <meshStandardMaterial color="#10b981" />
      </mesh>
    </group>
  );
}

export default function ElectionJourney({ autoRotate = false }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <RotatingScene />
    </Canvas>
  );
}
