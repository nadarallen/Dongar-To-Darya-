"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center overflow-hidden bg-brand-beige">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-background.png"
                    alt="Dongar to Darya Farm to Port Landscape"
                    fill
                    priority
                    className="object-cover object-bottom opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-beige/90 via-brand-beige/60 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Text Block */}
                    <div className="space-y-8 glass-panel p-8 md:p-12 rounded-3xl max-w-xl shadow-2xl backdrop-blur-md bg-white/30 border border-white/40">
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
                                className="gap-2 shadow-brand-mango/20 hover:bg-brand-mango hover:text-brand-navy"
                                onClick={() => scrollToSection('calculator')}
                            >
                                <MessageCircle size={20} />
                                WhatsApp Quote
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="gap-2 bg-white/50 backdrop-blur-sm border-brand-navy/20 hover:bg-white/80"
                                onClick={() => scrollToSection('products')}
                            >
                                View Products
                                <ArrowRight size={20} />
                            </Button>
                        </div>
                    </div>

                    {/* Right visual placeholder (Empty) */}
                    <div className="hidden md:block">
                    </div>
                </div>
            </div>
        </section>
    );
}
