"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
    Environment,
    Float,
    PerspectiveCamera,
    ContactShadows,
    Sparkles,
    Stars,
    Text,
    MeshTransmissionMaterial,
    useCursor
} from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";

// --- Colors ---
const COLORS = {
    farmBase: "#E07A5F",    // Terra Cotta
    farmHighlight: "#F2CC8F", // Sunset Gold
    seaBase: "#264653",     // Charcoal/Deep Blue
    seaHighlight: "#2A9D8F",  // Teal
    path: "#F4A261",        // Sandy Orange
    particle: "#FFF"
};

// --- Components ---

function AbstractFarm({ position }: { position: [number, number, number] }) {
    const [hovered, setHover] = useState(false);
    useCursor(hovered);

    // Random terrain blobs
    const blobs = useMemo(() => {
        return [...Array(5)].map((_, i) => ({
            scale: 0.8 + Math.random() * 0.5,
            pos: [
                (Math.random() - 0.5) * 2,
                (Math.random()) * 1,
                (Math.random() - 0.5) * 2
            ] as [number, number, number]
        }));
    }, []);

    return (
        <group position={position} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
            {/* Base Terrain */}
            <mesh position={[0, -0.5, 0]} receiveShadow>
                <cylinderGeometry args={[2.5, 2, 0.5, 32]} />
                <meshStandardMaterial
                    color={COLORS.farmBase}
                    roughness={0.8}
                    envMapIntensity={0.5}
                />
            </mesh>

            {/* Abstract Crops/Hills */}
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
                {blobs.map((blob, i) => (
                    <mesh key={i} position={blob.pos} castShadow>
                        <sphereGeometry args={[blob.scale, 32, 32]} />
                        <meshStandardMaterial
                            color={i % 2 === 0 ? COLORS.farmBase : COLORS.farmHighlight}
                            roughness={0.6}
                        />
                    </mesh>
                ))}
                {/* Label */}
                <Text
                    position={[0, 2.5, 0]}
                    fontSize={0.4}
                    color="#3D405B"
                    font="/fonts/Inter-Bold.ttf" // Fallback font relies on standard load, might fail silently if not present, uses default
                    anchorX="center"
                    anchorY="middle"
                >
                    DONGAR
                </Text>
            </Float>
        </group>
    );
}

function AbstractPort({ position }: { position: [number, number, number] }) {
    const [hovered, setHover] = useState(false);
    useCursor(hovered);

    return (
        <group position={position} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
            {/* Base Sea */}
            <mesh position={[0, -0.5, 0]} receiveShadow>
                <boxGeometry args={[3.5, 0.5, 3.5]} />
                <meshStandardMaterial
                    color={COLORS.seaBase}
                    roughness={0.2}
                    metalness={0.1}
                />
            </mesh>

            {/* Abstract Containers - Glass/Crystal style */}
            <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.4}>
                <group position={[0, 0.5, 0]}>
                    <mesh position={[-0.5, 0.5, 0.5]} castShadow>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={COLORS.seaHighlight} roughness={0.2} metalness={0.8} />
                    </mesh>
                    <mesh position={[0.5, 1, -0.5]} castShadow>
                        <boxGeometry args={[0.8, 1.5, 0.8]} />
                        <MeshTransmissionMaterial
                            backside
                            samples={4}
                            thickness={0.5}
                            chromaticAberration={0.1}
                            anisotropy={0.1}
                            distortion={0.1}
                            color={COLORS.seaHighlight}
                            resolution={512}
                        />
                    </mesh>
                    {/* Label */}
                    <Text
                        position={[0, 2.8, 0]}
                        fontSize={0.4}
                        color="#E0FBFC"
                        anchorX="center"
                        anchorY="middle"
                    >
                        DARYA
                    </Text>
                </group>
            </Float>
        </group>
    );
}

// Connections / Storytelling
function SupplyChainPath() {
    const curve = useMemo(() => {
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(-4, 0.5, 0),
            new THREE.Vector3(-2, 2, 1),
            new THREE.Vector3(0, 1.5, -1),
            new THREE.Vector3(2, 2, 0),
            new THREE.Vector3(4, 1, 0),
        ]);
    }, []);

    const linePoints = useMemo(() => curve.getPoints(50), [curve]);

    return (
        <group>
            {/* VIsible Path Line */}
            <line>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={linePoints.length}
                        array={new Float32Array(linePoints.flatMap(p => [p.x, p.y, p.z]))}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial color={COLORS.path} transparent opacity={0.3} colorWrite={true} />
            </line>

            {/* Animated Particles */}
            {[...Array(6)].map((_, i) => (
                <TrafficParticle key={i} curve={curve} offset={i / 6} speed={0.5} />
            ))}
        </group>
    );
}

function TrafficParticle({ curve, offset, speed }: { curve: THREE.CatmullRomCurve3, offset: number, speed: number }) {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ref.current) {
            // Calculate position along curve based on time
            const t = (state.clock.getElapsedTime() * speed * 0.2 + offset) % 1;
            const pos = curve.getPointAt(t);
            const tangent = curve.getTangentAt(t);

            ref.current.position.copy(pos);
            ref.current.lookAt(pos.clone().add(tangent));
        }
    });

    return (
        <mesh ref={ref} castShadow>
            <boxGeometry args={[0.3, 0.15, 0.6]} />
            <meshStandardMaterial color="#FFB703" emissive="#FF9F1C" emissiveIntensity={2} />
        </mesh>
    );
}

// --- Main Scene ---

export default function HeroScene() {
    return (
        <div className="w-full h-full absolute inset-0 z-0">
            <Canvas shadows dpr={[1, 2]} className="w-full h-full">
                <PerspectiveCamera makeDefault position={[0, 2, 14]} fov={30} />
                <fog attach="fog" args={['#FDFCDC', 10, 25]} /> {/* Soft distance fog matching bg */}

                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <spotLight
                    position={[10, 10, 5]}
                    angle={0.4}
                    penumbra={1}
                    intensity={1.5}
                    castShadow
                    shadow-mapSize={[1024, 1024]}
                    color="#FFF1E6"
                />
                <pointLight position={[-5, 5, -5]} intensity={0.5} color="#E07A5F" />

                {/* Content */}
                <group rotation={[0, -0.2, 0]}>
                    <AbstractFarm position={[-4, -1, 0]} />
                    <AbstractPort position={[4, -1, 0]} />
                    <SupplyChainPath />
                </group>

                {/* Particles/Atmosphere */}
                <Sparkles
                    count={50}
                    scale={12}
                    size={4}
                    speed={0.4}
                    opacity={0.5}
                    color="#F2CC8F"
                />

                <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />

                {/* Floor Shadow */}
                <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={20} blur={2} far={4} color="#8D99AE" />

                {/* Environment for Reflections */}
                <Environment preset="sunset" blur={0.8} />
            </Canvas>
        </div>
    );
}
