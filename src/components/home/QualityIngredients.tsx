"use client";

import React from "react";
import { motion } from "framer-motion";
import { Droplets, Leaf, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const ingredients = [
    {
        id: "mango",
        title: "Devgadh Alphonso Mangoes",
        description: "Known as the King of Mangoes, our GI-tagged Alphonso mangoes are carefully handpicked, ensuring the perfect balance of sweetness and rich, vibrant colour.",
        // A stylized mango representation
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                <path d="M10 2c-3 0-6 2-7 6s3 11 8 13c5-2 9-9 8-13A6 6 0 0 0 10 2Z" />
                <path d="M10 2v4" />
                <path d="M14 6S13 2 10 2" />
            </svg>
        ),
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
    },
    {
        id: "cashew",
        title: "Premium Jumbo Cashews",
        description: "W180 and W240 grade cashews sourced directly from select coastal farms. Roasted to a perfect crisp, delivering a creamy texture and nutty profile.",
        // A stylized cashew/nut representation
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                <path d="M12 22a9 9 0 0 0 9-9c0-5-3-9-9-9s-9 4-9 9a9 9 0 0 0 9 9Z" />
                <path d="M12 4a3 3 0 0 1 3 3v8a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3Z" />
            </svg>
        ),
        color: "text-accent",
        bg: "bg-accent/10",
        border: "border-accent/20",
    },
    {
        id: "pulp",
        title: "100% Pure Mango Pulp",
        description: "We extract our pulp using advanced, hygienic methods that lock in the fresh flavor, aroma, and nutrients without any artificial additives or preservatives.",
        // Pulp/liquid representation
        icon: <Droplets className="w-10 h-10" />,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
    }
];

export default function QualityIngredients() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Textures */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
                    <span className="inline-flex items-center justify-center gap-2 text-secondary font-bold tracking-widest uppercase text-sm bg-secondary/10 px-4 py-2 rounded-full">
                        <Award className="w-4 h-4" /> Uncompromising Quality
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-secondary">
                        The Heart of Our <span className="text-primary">Difference</span>
                    </h2>
                    <p className="text-secondary/70 text-lg">
                        We believe that great products start with the finest ingredients. Our commitment to purity is reflected in every harvest.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting line on desktop */}
                    <div className="hidden md:block absolute top-[4rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-secondary/10 to-transparent -z-10" />

                    {ingredients.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={cn(
                                "group bg-white rounded-3xl p-8 border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center",
                                item.border
                            )}
                        >
                            <div className={cn(
                                "w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110",
                                item.bg,
                                item.color
                            )}>
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-secondary mb-4 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-secondary/80 leading-relaxed font-medium">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
