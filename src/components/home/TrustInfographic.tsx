"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Package, Snowflake, Ship } from "lucide-react";

const trustFactors = [
    {
        id: "qc",
        title: "Quality Certified",
        desc: "100% Export Grade. APEDA registered & Phyto-sanitary certified.",
        icon: BadgeCheck,
        color: "text-primary"
    },
    {
        id: "pack",
        title: "Premium Packaging",
        desc: "Shock-proof, aerated packaging ensuring zero damage in transit.",
        icon: Package,
        color: "text-accent"
    },
    {
        id: "cold",
        title: "Cold Chain",
        desc: "Unbroken cold storage from 13°C farm collection to reefer containers.",
        icon: Snowflake,
        color: "text-accent"
    },
    {
        id: "ship",
        title: "Global Logistics",
        desc: "Partnerships with Maersk & Hapag-Lloyd for guaranteed slot booking.",
        icon: Ship,
        color: "text-white"
    },
];

export default function TrustInfographic() {
    return (
        <section className="py-24 bg-secondary relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
                        Uncompromising <span className="text-accent">Quality</span>
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
                            className="glass-panel bg-white/5 border-white/10 p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-300"
                        >
                            <div className={`w-20 h-20 mb-6 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${factor.color}`}>
                                <factor.icon size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{factor.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{factor.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
