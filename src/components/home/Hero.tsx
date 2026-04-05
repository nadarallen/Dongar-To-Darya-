"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight, MessageCircle, Leaf } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full min-h-[100dvh] pt-20 flex items-center justify-center overflow-hidden bg-background">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-secondary/20">
                <Image
                    src="/images/hero-background.png"
                    alt="Dongara to Darya Mango Orchard"
                    fill
                    className="object-cover object-center opacity-40 mix-blend-overlay"
                    sizes="100vw"
                />
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-secondary/95 via-secondary/40 to-transparent" />
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[8%] opacity-20 text-primary"
                >
                    <Leaf size={72} fill="currentColor" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 40, 0], rotate: [0, -15, 15, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[20%] right-[12%] opacity-15 text-secondary"
                >
                    <Leaf size={96} fill="currentColor" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -40, 0], x: [0, 20, 0], rotate: [0, 20, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-[30%] right-[20%] opacity-25 w-16 h-16 md:w-24 md:h-24 blur-[1px]"
                >
                    <Image src="/images/mango-product.png" alt="Mango" fill className="object-contain" sizes="(max-width: 768px) 4rem, 6rem" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 30, 0], x: [0, -20, 0], rotate: [0, -20, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[30%] left-[15%] opacity-25 w-16 h-16 md:w-20 md:h-20 blur-[1px]"
                >
                    <Image src="/images/cashew-product.png" alt="Cashew" fill className="object-contain" sizes="(max-width: 768px) 4rem, 5rem" />
                </motion.div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl flex flex-col items-center md:items-start text-center md:text-left space-y-8">
                    
                    {/* Badge */}
                    <motion.span 
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-block px-5 py-2 rounded-full bg-primary text-secondary font-bold text-sm tracking-wider uppercase shadow-xl cursor-default"
                    >
                        Premium Quality Exports
                    </motion.span>
                    
                    {/* Headline */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-white leading-[1.1] drop-shadow-2xl"
                    >
                        From <span className="text-primary inline-block">Orchard</span><br className="hidden md:block"/> to Pulp
                    </motion.h1>
                    
                    {/* Subtext */}
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        className="text-lg md:text-2xl text-background font-medium max-w-2xl leading-relaxed drop-shadow-lg"
                    >
                        Bringing you the finest premium cashews and purest mango pulp straight from the lush orchards to the world.
                    </motion.p>

                    {/* CTAs - Stacked on Mobile, Row on Desktop */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4 md:pt-6"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto flex items-center justify-center gap-3 text-background bg-primary hover:bg-background hover:text-secondary font-bold text-lg py-6 shadow-[0_0_30px_rgba(249,162,27,0.3)] transition-colors duration-300 pointer-events-auto"
                                onClick={() => scrollToSection('calculator')}
                            >
                                <MessageCircle size={22} className="md:w-6 md:h-6" />
                                WhatsApp Quote
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-background/40 text-background hover:bg-background/80 hover:text-secondary font-bold text-base md:text-lg py-5 md:py-6 transition-colors duration-300 pointer-events-auto"
                                onClick={() => scrollToSection('products')}
                            >
                                Explore Products
                                <ArrowRight size={22} className="md:w-6 md:h-6" />
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
