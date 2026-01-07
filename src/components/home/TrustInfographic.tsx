"use client";

import { Canvas } from "@react-three/fiber";
import { Float, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
// --- 3D Models ---
function CargoShip() {
    return (
        <group scale={0.6} rotation={[0, -Math.PI / 4, 0]}>
            <mesh position={[0, -0.5, 0]}>
                <boxGeometry args={[3.5, 0.8, 1]} />
                <meshStandardMaterial color="#E63946" />
            </mesh>
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[3.6, 0.2, 1.1]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[1.2, 0.5, 0]}>
                <boxGeometry args={[0.8, 1.2, 0.8]} />
                <meshStandardMaterial color="#F1FAEE" />
            </mesh>
            <mesh position={[1.2, 1.2, 0]}>
                <boxGeometry args={[1, 0.2, 1]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[-0.5, 0.4, 0.2]} castShadow>
                <boxGeometry args={[0.8, 0.8, 0.35]} />
                <meshStandardMaterial color="#457B9D" />
            </mesh>
            <mesh position={[-0.5, 0.4, -0.2]} castShadow>
                <boxGeometry args={[0.8, 0.8, 0.35]} />
                <meshStandardMaterial color="#1D3557" />
            </mesh>
        </group>
    )
}

function QualityBadge() {
    return (
        <group scale={0.7} rotation={[0, 0, 0]}>
            {/* Shield Body */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[1.2, 0, 1.5, 6, 1]} />
                <meshStandardMaterial color="#E07A5F" roughness={0.3} metalness={0.6} />
            </mesh>
            {/* Rim */}
            <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
                <torusGeometry args={[1.0, 0.1, 8, 6]} />
                <meshStandardMaterial color="#F2CC8F" roughness={0.2} metalness={0.8} />
            </mesh>
            {/* Checkmark */}
            <mesh position={[-0.2, 0, 0.5]} rotation={[0, 0, -Math.PI / 4]}>
                <boxGeometry args={[0.2, 0.6, 0.1]} />
                <meshStandardMaterial color="#fff" />
            </mesh>
            <mesh position={[0.2, 0.2, 0.5]} rotation={[0, 0, Math.PI / 4]}>
                <boxGeometry args={[0.2, 1.0, 0.1]} />
                <meshStandardMaterial color="#fff" />
            </mesh>
        </group>
    )
}

function PremiumBox() {
    return (
        <group scale={0.7} rotation={[0.4, 0.4, 0]}>
            {/* Box Body */}
            <mesh>
                <boxGeometry args={[1.8, 1.8, 1.8]} />
                <meshStandardMaterial color="#D4A373" roughness={0.8} />
            </mesh>
            {/* Tape / Straps */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1.82, 1.82, 0.2]} />
                <meshStandardMaterial color="#264653" />
            </mesh>
            <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                <boxGeometry args={[1.82, 1.82, 0.2]} />
                <meshStandardMaterial color="#264653" />
            </mesh>
        </group>
    )
}

function ColdIcon() {
    return (
        <group scale={0.7} rotation={[0, 0, 0]}>
            {/* Center Hex */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.5, 0.5, 0.2, 6]} />
                <meshStandardMaterial color="#A8DADC" roughness={0.2} />
            </mesh>
            {/* Snow Spikes */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <mesh key={i} rotation={[0, 0, angle * (Math.PI / 180)]} position={[0, 0, 0]}>
                    <boxGeometry args={[0.2, 2.2, 0.1]} />
                    <meshStandardMaterial color="#457B9D" />
                </mesh>
            ))}
            <mesh position={[0, 0, 0.2]}>
                <ringGeometry args={[0.8, 0.9, 32]} />
                <meshStandardMaterial color="#fff" side={THREE.DoubleSide} />
            </mesh>
        </group>
    )
}

function Badge3D({ type }: { type: string }) {
    return (
        <Float rotationIntensity={0.5} floatIntensity={0.5} speed={2}>
            {type === 'ship' && <CargoShip />}
            {type === 'qc' && <QualityBadge />}
            {type === 'pack' && <PremiumBox />}
            {type === 'cold' && <ColdIcon />}
        </Float>
    )
}

const trustFactors = [
    {
        id: "qc",
        title: "Quality Certified",
        desc: "100% Export Grade. APEDA registered & Phyto-sanitary certified.",
    },
    {
        id: "pack",
        title: "Premium Packaging",
        desc: "Shock-proof, aerated packaging ensuring zero damage in transit.",
    },
    {
        id: "cold",
        title: "Cold Chain",
        desc: "Unbroken cold storage from 13°C farm collection to reefer containers.",
    },
    {
        id: "ship",
        title: "Global Logistics",
        desc: "Partnerships with Maersk & Hapag-Lloyd for guaranteed slot booking.",
    },
];

export default function TrustInfographic() {
    return (
        <section className="py-24 bg-brand-navy relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-brand-mango font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
                        Uncompromising <span className="text-brand-teal">Quality</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        From the soil of Ratnagiri to the shelves of Europe. We maintain impeccable standards at every step.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trustFactors.map((factor, index) => (
                        <motion.div
                            key={factor.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel bg-white/5 border-white/10 p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-full h-40 mb-6 relative">
                                <Canvas shadows>
                                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                                    <ambientLight intensity={0.5} />
                                    <pointLight position={[10, 10, 10]} />
                                    <Badge3D type={factor.id} />
                                </Canvas>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-mango transition-colors">{factor.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{factor.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
