'use client';

import { Component, ErrorInfo, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, OrbitControls, PerspectiveCamera, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

type StudioNode = { label: string; position: [number, number, number]; active?: boolean };

const nodes: StudioNode[] = [
  { label: 'AI', position: [-2.1, 1.25, 0.1] },
  { label: 'AUTOMATION', position: [2.15, 1.05, -0.2] },
  { label: 'SOFTWARE', position: [-2.2, -1.15, 0.2] },
  { label: 'DATA', position: [2.1, -1.15, 0.2] },
  { label: 'VOICE AI', position: [0, 2.05, -0.1] },
];

class CanvasErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Canvas WebGL error handled:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function Core() {
  const group = useRef<THREE.Group>(null);
  const ringOne = useRef<THREE.Mesh>(null);
  const ringTwo = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!group.current || !ringOne.current || !ringTwo.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.08;
    ringOne.current.rotation.z += delta * 0.35;
    ringTwo.current.rotation.x -= delta * 0.27;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[0.82, 2]} />
        <meshStandardMaterial color="#1e293b" emissive="#1d4ed8" emissiveIntensity={1.2} metalness={0.6} roughness={0.2} transparent opacity={0.92} />
      </mesh>
      <mesh scale={0.72}>
        <icosahedronGeometry args={[0.82, 2]} />
        <meshBasicMaterial color="#2563eb" wireframe transparent opacity={0.6} />
      </mesh>
      <mesh ref={ringOne} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.16, 0.012, 8, 96]} />
        <meshBasicMaterial color="#2563eb" transparent opacity={0.7} />
      </mesh>
      <mesh ref={ringTwo} rotation={[0, Math.PI / 3, Math.PI / 4]}>
        <torusGeometry args={[1.42, 0.008, 8, 96]} />
        <meshBasicMaterial color="#0d9488" transparent opacity={0.6} />
      </mesh>
      <pointLight color="#2563eb" intensity={2.4} distance={5} />
    </group>
  );
}

function Node({ node, index }: { node: StudioNode; index: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.3 + index) * 0.08;
    ref.current.scale.setScalar(pulse);
  });

  const nodeColor = index % 2 === 0 ? '#2563eb' : '#0d9488';

  return (
    <group ref={ref} position={node.position}>
      <mesh>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color={nodeColor} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshBasicMaterial color={nodeColor} transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function Connections() {
  const lines = useMemo(() => nodes.map((node) => [node.position, [0, 0, 0] as [number, number, number]]), []);
  return (
    <>
      {lines.map((points, index) => (
        <Line key={index} points={points} color={index % 2 === 0 ? '#2563eb' : '#0d9488'} transparent opacity={0.25} lineWidth={0.8} dashed dashSize={0.08} gapSize={0.12} />
      ))}
      <Line points={[nodes[0].position, nodes[1].position, nodes[3].position, nodes[2].position, nodes[0].position]} color="#2563eb" transparent opacity={0.15} lineWidth={0.6} />
    </>
  );
}

function StudioScene() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.pointer.x * 0.06;
    group.current.rotation.x = -state.pointer.y * 0.04;
  });
  return (
    <group ref={group}>
      <Core />
      <Connections />
      {nodes.map((node, index) => <Node key={node.label} node={node} index={index} />)}
      <Sparkles count={80} scale={[8, 6, 4]} size={1.2} speed={0.18} color="#2563eb" opacity={0.35} />
    </group>
  );
}

export function StudioCanvas() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const fallback = <div className="absolute inset-0 grid-bg-fine" aria-label="Abstract studio visualization" />;

  if (!mounted) return fallback;

  return (
    <CanvasErrorBoundary fallback={fallback}>
      <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} fallback={fallback}>
        <PerspectiveCamera makeDefault position={[0, 0, 7.6]} fov={42} />
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 3, 4]} color="#2563eb" intensity={1.8} />
        <StudioScene />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </CanvasErrorBoundary>
  );
}
