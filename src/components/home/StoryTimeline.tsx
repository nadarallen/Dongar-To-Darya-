"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logisticMap from "../../../asserts/logistic exporter.webp";
import { Leaf, Cog, Ship, Globe2 } from "lucide-react";

const steps = [
    {
        id: "farm",
        title: "1. The Source",
        description: "Handpicked from the lush, rugged hills of Ratnagiri. Our farmers ensure each harvest is peak quality.",
        color: "bg-secondary text-white",
        icon: <Leaf className="w-8 h-8 text-white" />,
        image: "/images/timeline-farm.png"
    },
    {
        id: "process",
        title: "2. Processing",
        description: "Sorted, graded, and packed in hygienic facilities using state-of-the-art preservation techniques for pure pulp and perfect cashews.",
        color: "bg-primary text-secondary",
        icon: <Cog className="w-8 h-8 text-secondary" />,
        image: "/images/timeline-processing.png"
    },
    {
        id: "export",
        title: "3. Logistics",
        description: "Integrated cold-chain packaging from 'Dongara' (Hill) to 'Darya' (Port) ensuring ultimate freshness.",
        color: "bg-accent text-white",
        icon: <Ship className="w-8 h-8 text-white" />,
        image: "/images/timeline-logistics.png"
    },
    {
        id: "global",
        title: "4. Global Reach",
        description: "Delivered to international markets securely. Bridging boundaries with premium, export-grade Indian produce.",
        color: "bg-secondary text-white",
        icon: <Globe2 className="w-8 h-8 text-white" />,
        image: logisticMap
    },
];

export default function StoryTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const [activeStep, setActiveStep] = useState(0);

    return (
        <section ref={containerRef} id="process" className="relative bg-background">
            <div className="flex flex-col md:flex-row">

                {/* Left Side: Sticky Visuals with Natural Textures */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 flex items-center justify-center overflow-hidden z-10 border-b md:border-b-0 border-secondary/5 p-8 bg-gradient-to-br from-background to-white/50">
                    {/* Background Leaf Pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                    <div className="relative w-full max-w-lg aspect-square">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, scale: 0.95, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 1.05, rotate: 5 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-[3rem] border border-white/40 shadow-2xl overflow-hidden flex items-center justify-center p-8"
                            >
                                <Image
                                    src={steps[activeStep].image}
                                    alt={steps[activeStep].title}
                                    fill
                                    className="object-contain drop-shadow-2xl mix-blend-multiply transition-transform hover:scale-105 duration-700 p-8"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right Side: Scrollable Text Content */}
                <div className="w-full md:w-1/2 relative">
                    {/* Add padding top/bottom to allow scrolling flow */}
                    <div className="py-12 md:py-[20vh] space-y-16 md:space-y-[40vh] px-4 md:px-16 lg:px-24">
                        {/* Timeline Leader Line */}
                        <div className="absolute top-[20vh] bottom-[20vh] left-[39px] md:left-[95px] lg:left-[127px] w-1 bg-secondary/10 hidden md:block" />

                        {steps.map((step, index) => (
                            <StepCard
                                key={step.id}
                                step={step}
                                index={index}
                                onActive={() => setActiveStep(index)}
                            />
                        ))}
                        {/* Spacing to allow last item to scroll up */}
                        <div className="h-[10vh] md:hidden" />
                    </div>
                </div>
            </div>
            
            {/* Organic SVG Divider Bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none text-white">
                <svg className="relative block h-[50px] sm:h-[100px] w-[calc(100%+1.3px)]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.58,18.25,661.32.91,575.52,1.92,493.13,18.64c-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V100c-67.81,23.09-144.29,15.48-214.34-7.17Z" className="fill-current"></path>
                </svg>
            </div>
        </section>
    );
}

function StepCard({ step, onActive }: { step: any, index: number, onActive: () => void }) {
    return (
        <motion.div
            className="flex flex-col md:flex-row gap-6 relative z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.6, margin: "0px 0px -20% 0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onViewportEnter={onActive}
        >
            {/* Icon Bubble */}
            <div className={cn("w-16 h-16 shrink-0 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10 transition-transform duration-500 hover:scale-110", step.color)}>
                {step.icon}
            </div>

            {/* Content Card */}
            <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 flex-grow group">
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-secondary mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-base md:text-lg text-secondary/80 leading-relaxed font-medium">{step.description}</p>
            </div>
        </motion.div>
    )
}
