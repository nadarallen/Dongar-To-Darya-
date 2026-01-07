"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, PerspectiveCamera, ContactShadows, MeshTransmissionMaterial, Sparkles } from "@react-three/drei";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import * as THREE from "three";

// --- Colors (Matching HeroScene) ---
const COLORS = {
    farmBase: "#E07A5F",
    farmHighlight: "#F2CC8F",
    processBase: "#F4A261",
    processHighlight: "#E9C46A",
    exportBase: "#264653",
    exportHighlight: "#2A9D8F",
    globalBase: "#2A9D8F",
    globalHighlight: "#FFFFFF"
};

// --- 3D Elements ---

function TimelineIcon({ type, isActive }: { type: string; isActive: boolean }) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Gentle floating rotation
            groupRef.current.rotation.y += 0.005;

            // Active state animation (scale pulse)
            const targetScale = isActive ? 1.2 : 0.0; // Hide if not active? Or just shrink? 
            // Better: Make it transition between types.
            // Since we only show ONE icon at a time based on activeStep, this component is re-rendered or prop changes.
            // If we want smooth transitions, we might need to render ALL of them and toggle visibility/scale.

            // For now, let's keep the single current icon logic but smooth the scale in
            groupRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>

                {/* 1. THE SOURCE: Organic Abstract Farms */}
                {type === 'farm' && (
                    <group>
                        {/* Abstract Terrain */}
                        <mesh position={[0, -0.5, 0]}>
                            <sphereGeometry args={[1.2, 32, 32]} />
                            <meshStandardMaterial color={COLORS.farmBase} roughness={0.8} />
                        </mesh>
                        {/* Floating Crop Spheres */}
                        <mesh position={[0.8, 0.5, 0.5]}>
                            <sphereGeometry args={[0.4, 32, 32]} />
                            <meshStandardMaterial color={COLORS.farmHighlight} roughness={0.5} />
                        </mesh>
                        <mesh position={[-0.6, 0.8, -0.2]}>
                            <sphereGeometry args={[0.3, 32, 32]} />
                            <meshStandardMaterial color={COLORS.farmHighlight} roughness={0.5} />
                        </mesh>
                    </group>
                )}

                {/* 2. PROCESSING: Abstract Sorting/Rings */}
                {type === 'process' && (
                    <group>
                        {/* Central Core */}
                        <mesh>
                            <icosahedronGeometry args={[0.8, 0]} />
                            <meshStandardMaterial color={COLORS.processBase} roughness={0.2} metalness={0.8} />
                        </mesh>
                        {/* Orbiting Rings */}
                        <mesh rotation={[1, 0, 0]}>
                            <torusGeometry args={[1.4, 0.1, 16, 100]} />
                            <meshStandardMaterial color={COLORS.processHighlight} emissive={COLORS.processHighlight} emissiveIntensity={0.5} />
                        </mesh>
                        <mesh rotation={[0, 1, 0]}>
                            <torusGeometry args={[1.8, 0.05, 16, 100]} />
                            <meshStandardMaterial color={COLORS.processHighlight} />
                        </mesh>
                    </group>
                )}

                {/* 3. LOGISTICS: Cold Chain Truck */}
                {type === 'export' && (
                    <group rotation={[0, -Math.PI / 4, 0]} position={[0, -0.5, 0]}>
                        {/* Truck Chassis */}
                        <mesh position={[0, 0.3, 0]}>
                            <boxGeometry args={[2.5, 0.2, 0.8]} />
                            <meshStandardMaterial color="#333" />
                        </mesh>

                        {/* Wheels */}
                        <mesh position={[-0.8, 0.15, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
                            <cylinderGeometry args={[0.2, 0.2, 0.2, 16]} />
                            <meshStandardMaterial color="#111" />
                        </mesh>
                        <mesh position={[-0.8, 0.15, -0.45]} rotation={[Math.PI / 2, 0, 0]}>
                            <cylinderGeometry args={[0.2, 0.2, 0.2, 16]} />
                            <meshStandardMaterial color="#111" />
                        </mesh>
                        <mesh position={[0.8, 0.15, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
                            <cylinderGeometry args={[0.2, 0.2, 0.2, 16]} />
                            <meshStandardMaterial color="#111" />
                        </mesh>
                        <mesh position={[0.8, 0.15, -0.45]} rotation={[Math.PI / 2, 0, 0]}>
                            <cylinderGeometry args={[0.2, 0.2, 0.2, 16]} />
                            <meshStandardMaterial color="#111" />
                        </mesh>

                        {/* Cab */}
                        <mesh position={[0.9, 0.8, 0]}>
                            <boxGeometry args={[0.7, 0.8, 0.8]} />
                            <meshStandardMaterial color="#264653" /> {/* Navy Cab */}
                        </mesh>
                        <mesh position={[0.95, 0.9, 0]}>
                            <boxGeometry args={[0.71, 0.4, 0.7]} />
                            <meshStandardMaterial color="#333" /> {/* Windows */}
                        </mesh>

                        {/* Reefer Container */}
                        <mesh position={[-0.4, 0.9, 0]}>
                            <boxGeometry args={[1.7, 1.0, 0.85]} />
                            <meshStandardMaterial color="#F1FAEE" roughness={0.2} /> {/* White/Cold container */}
                        </mesh>
                        {/* Snowflake/Cold Detail on side */}
                        <mesh position={[-0.4, 0.9, 0.43]}>
                            <circleGeometry args={[0.2, 6]} />
                            <meshStandardMaterial color="#A8DADC" />
                        </mesh>
                    </group>
                )}

                {/* 4. GLOBAL REACH: Wireframe Globe */}
                {type === 'global' && (
                    <group>
                        <mesh>
                            <sphereGeometry args={[1.5, 24, 24]} />
                            <meshStandardMaterial color={COLORS.globalBase} wireframe transparent opacity={0.3} />
                        </mesh>
                        <mesh>
                            <sphereGeometry args={[1.2, 24, 24]} />
                            <MeshTransmissionMaterial
                                backside
                                samples={4}
                                thickness={0.2}
                                chromaticAberration={0.2}
                                anisotropy={0.1}
                                distortion={0.2}
                                color="#FFFFFF"
                                resolution={512}
                            />
                        </mesh>
                        <Sparkles count={20} scale={3} size={2} speed={0.4} opacity={0.8} color="#FFF" />
                    </group>
                )}
            </Float>
            <ContactShadows opacity={0.4} scale={10} blur={2.5} far={4} position={[0, -2, 0]} color="#000" />
        </group>
    );
}

const steps = [
    {
        id: "farm",
        title: "1. The Source",
        description: "Handpicked from the lush, rugged hills of Ratnagiri. Our farmers ensure each harvest is peak quality.",
        color: "bg-brand-green/10 border-brand-green",
    },
    {
        id: "process",
        title: "2. Processing",
        description: "Sorted, graded, and packed in hygienic facilities using state-of-the-art preservation techniques.",
        color: "bg-brand-mango/10 border-brand-mango",
    },
    {
        id: "export",
        title: "3. Logistics",
        description: "Integrated cold-chain logistics from 'Dongar' (Hill) to 'Darya' (Port) ensuring freshness.",
        color: "bg-brand-navy/10 border-brand-navy",
    },
    {
        id: "global",
        title: "4. Global Reach",
        description: "Delivered to international markets securely. Bridging boundaries with premium Indian produce.",
        color: "bg-brand-teal/10 border-brand-teal",
    },
];

export default function StoryTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const [activeStep, setActiveStep] = useState(0);

    return (
        <section ref={containerRef} id="process" className="relative bg-brand-beige">
            <div className="flex flex-col md:flex-row">

                {/* Left Side: Sticky 3D Visualization */}
                {/* Mobile: 45vh height, Stick to top. Desktop: full screen sticky */}
                <div className="w-full md:w-1/2 h-[45vh] md:h-screen sticky top-0 flex items-center justify-center bg-gradient-to-br from-brand-beige to-white overflow-hidden z-10 border-b md:border-b-0 border-brand-navy/5">
                    <div className="w-full h-full absolute inset-0">
                        <Canvas shadows dpr={[1, 2]} className="w-full h-full">
                            <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={35} />
                            <ambientLight intensity={0.6} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
                            <Environment preset="sunset" />
                            {/* Key is important to force re-mount or we animate manually. Let's just swap props for now */}
                            <TimelineIcon type={steps[activeStep].id} isActive={true} />
                        </Canvas>
                    </div>
                </div>

                {/* Right Side: Scrollable Text Content */}
                <div className="w-full md:w-1/2 relative bg-brand-beige md:bg-transparent">
                    {/* Add padding top/bottom to allow scrolling flow */}
                    <div className="py-12 md:py-[20vh] space-y-16 md:space-y-[60vh] px-4 md:px-16">
                        {steps.map((step, index) => (
                            <StepCard
                                key={step.id}
                                step={step}
                                index={index}
                                onActive={() => setActiveStep(index)}
                            />
                        ))}
                        {/* Spacing to allow last item to scroll up */}
                        <div className="h-[20vh] md:hidden" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function StepCard({ step, index, onActive }: any) {
    return (
        <motion.div
            className={cn("glass-panel p-6 md:p-12 rounded-2xl border-l-4 shadow-lg backdrop-blur-md bg-white/80 md:bg-white/60", step.color)}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.6, margin: "0px 0px -20% 0px" }}
            transition={{ duration: 0.6, type: "spring" }}
            onViewportEnter={onActive}
        >
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-brand-navy mb-4">{step.title}</h3>
            <p className="text-base md:text-lg text-brand-navy/80 leading-relaxed">{step.description}</p>
        </motion.div>
    )
}
