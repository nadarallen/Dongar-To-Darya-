"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Html, PerspectiveCamera, useTexture } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Real Lat/Lon data for countries
const markers = [
    { country: "India", lat: 20.5937, lon: 78.9629 },
    { country: "USA", lat: 37.0902, lon: -95.7129 },
    { country: "UK", lat: 55.3781, lon: -3.4360 },
    { country: "Germany", lat: 51.1657, lon: 10.4515 },
    { country: "UAE", lat: 23.4241, lon: 53.8478 },
    { country: "Singapore", lat: 1.3521, lon: 103.8198 },
    { country: "Australia", lat: -25.2744, lon: 133.7751 },
];

function latLongToVector3(lat: number, lon: number, radius: number): [number, number, number] {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = (radius * Math.sin(phi) * Math.sin(theta));
    const y = (radius * Math.cos(phi));

    return [x, y, z];
}

function InteractiveGlobe() {
    const groupRef = useRef<THREE.Group>(null);
    const cloudsRef = useRef<THREE.Mesh>(null);

    // Load Textures
    const [colorMap, normalMap, specularMap, cloudsMap] = useTexture([
        'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
        'https://unpkg.com/three-globe/example/img/earth-topology.png',
        'https://unpkg.com/three-globe/example/img/earth-water.png',
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'
    ]);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.0005; // Slower rotation
        }
        if (cloudsRef.current) {
            cloudsRef.current.rotation.y += 0.0007;
        }
    });

    return (
        <group ref={groupRef} rotation={[0, 0, 23.5 * (Math.PI / 180)]}> {/* Earth Axis Tilt */}
            {/* Realistic Earth */}
            <mesh>
                <sphereGeometry args={[2, 64, 64]} />
                <meshPhongMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    specularMap={specularMap}
                    specular={new THREE.Color('grey')}
                    shininess={5}
                />
            </mesh>

            {/* Clouds Layer */}
            <mesh ref={cloudsRef} scale={[1.01, 1.01, 1.01]}>
                <sphereGeometry args={[2, 64, 64]} />
                <meshStandardMaterial
                    map={cloudsMap}
                    transparent
                    opacity={0.3}
                    blending={THREE.AdditiveBlending}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Atmosphere Glow */}
            <mesh scale={[1.15, 1.15, 1.15]}>
                <sphereGeometry args={[2, 64, 64]} />
                <meshBasicMaterial
                    color="#4db2ff"
                    transparent
                    opacity={0.08}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Markers */}
            {markers.map((m, i) => {
                const pos = latLongToVector3(m.lat, m.lon, 2.02); // Slightly above surface
                return (
                    <group key={i} position={pos}>
                        <mesh>
                            <sphereGeometry args={[0.04, 16, 16]} />
                            <meshBasicMaterial color="#FFB703" toneMapped={false} />
                        </mesh>
                        <pointLight color="#FFB703" intensity={1} distance={0.5} />
                        {/* Optional Ring for visibility */}
                        <mesh rotation={[Math.PI / 2, 0, 0]}>
                            <ringGeometry args={[0.06, 0.08, 32]} />
                            <meshBasicMaterial color="#FFB703" transparent opacity={0.6} side={THREE.DoubleSide} />
                        </mesh>
                    </group>
                );
            })}

        </group>
    )
}


export default function GlobalReach() {
    return (
        <section className="py-24 bg-brand-navy overflow-hidden relative" id="global">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    <div className="w-full md:w-1/2 space-y-8 text-white">
                        <div className="space-y-4">
                            <span className="text-brand-mango font-bold tracking-widest uppercase text-sm">Worldwide Network</span>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading">
                                Delivering to <br /><span className="text-brand-teal">20+ Countries</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Our established logistics network ensures timely delivery to major ports across USA, Europe, Middle East, and Asia-Pacific.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {["United States", "United Kingdom", "Germany", "UAE", "Singapore", "Australia"].map((c) => (
                                <div key={c} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-brand-mango" />
                                    <span className="text-sm font-medium text-gray-200">{c}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 h-[350px] md:h-[500px] relative">
                        <div className="absolute inset-0 bg-brand-teal/5 rounded-full blur-3xl" />
                        <Canvas shadows camera={{ position: [0, 0, 5.5], fov: 45 }}>
                            <ambientLight intensity={1.5} />
                            <pointLight position={[10, 10, 10]} intensity={1} />
                            <InteractiveGlobe />
                            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                        </Canvas>
                    </div>

                </div>
            </div>
        </section>
    );
}
