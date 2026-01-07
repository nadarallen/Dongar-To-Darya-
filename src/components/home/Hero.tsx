"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight, MessageCircle } from "lucide-react";
import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false });

export default function Hero() {
    return (
        <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center overflow-hidden bg-brand-beige">
            {/* 3D Scene Container / Fallback Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-clay/20 via-brand-beige to-brand-navy/20" />
                <HeroScene />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 pointer-events-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Text Block */}
                    <div className="pointer-events-auto space-y-8 glass-panel p-8 md:p-12 rounded-3xl max-w-xl">
                        <div className="space-y-4">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-mango/20 text-brand-navy font-bold text-sm tracking-wide border border-brand-mango/30">
                                PREMIUM INDIAN EXPORTS
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold font-heading text-brand-navy leading-[1.1] drop-shadow-sm">
                                From Indian
                                <span className="text-brand-clay block">Farms</span>
                                to Global
                                <span className="text-brand-navy block">Markets</span>
                            </h1>
                            <p className="text-xl text-brand-navy/80 font-medium max-w-md leading-relaxed">
                                Seamlessly connecting &quot;Dongar&quot; (Mountains) to &quot;Darya&quot; (Sea).
                                Exporting premium Alphonso Mangoes, Cashews, and Spices worldwide.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="gap-2 shadow-brand-mango/20"
                                onClick={() => window.open("https://wa.me/918419921183", "_blank")}
                            >
                                <MessageCircle size={20} />
                                WhatsApp Quote
                            </Button>
                            <Button size="lg" variant="outline" className="gap-2 bg-white/50 backdrop-blur-sm">
                                View Products
                                <ArrowRight size={20} />
                            </Button>
                        </div>
                    </div>

                    {/* Right visual placeholder (will be replaced by 3D elements) */}
                    <div className="hidden md:block">
                        {/* Visual space for 3D Port elements */}
                    </div>
                </div>
            </div>
        </section>
    );
}
