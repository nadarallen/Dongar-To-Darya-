"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShoppingBag, Droplets, Leaf } from "lucide-react";
import Image from "next/image";

const products = [
    {
        id: "mango-alphonso",
        name: "Alphonso Mangoes",
        desc: "The King of Mangoes. GI-tagged Devgadh Alphonso with rich aroma and sweetness.",
        price: "Premium Rate",
        image: "/images/mango-product.png"
    },
    {
        id: "mango-kesar",
        name: "Kesar Mangoes",
        desc: "Queen of Mangoes from Gujarat. Exceptionally sweet with a distinct saffron hue.",
        price: "Premium Rate",
        image: "/images/mango-product.png"
    },
    {
        id: "cashew-w180",
        name: "W180 Jumbo Cashews",
        desc: "The absolute largest, premium grade whole cashew kernels.",
        price: "Export Grade",
        image: "/images/cashew-product.png"
    },
    {
        id: "cashew-w240",
        name: "W240 Premium Cashews",
        desc: "Standard large size cashews, perfectly crisp and roasted.",
        price: "Export Grade",
        image: "/images/cashew-product.png"
    },
];

export default function ProductShowcase() {
    return (
        <section id="products" className="relative bg-background overflow-hidden">
            {/* Organic SVG Divider Top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 text-white">
                <svg className="relative block h-[50px] sm:h-[100px] w-[calc(100%+1.3px)]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
                </svg>
            </div>

            <div className="pt-32 pb-24 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-accent font-bold tracking-widest uppercase text-sm bg-accent/10 px-4 py-2 rounded-full">Fresh from Farms</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-secondary">
                        Our Premium <span className="text-primary">Harvest</span>
                    </h2>
                    <p className="text-secondary/70 max-w-2xl mx-auto text-lg">
                        Directly sourced. Meticulously graded. Packed for global excellence.
                    </p>
                </div>

                {/* Cashews & Raw Mangoes Grid: 4 Desktop, 2 Tablet, 1 Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-32">
                    {products.map((product) => (
                        <div key={product.id} className="group relative bg-white/80 backdrop-blur-md rounded-[2rem] p-5 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(249,162,27,0.3)] shadow-lg border border-primary/20 hover:border-primary/40 flex flex-col h-full">
                            
                            {/* Product Image Area with Zoom */}
                            <div className="h-48 sm:h-56 w-full bg-gradient-to-b from-primary/5 to-transparent rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center p-6">
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl mix-blend-multiply" />
                                <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-110">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain drop-shadow-xl z-10"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-secondary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                                    {product.price}
                                </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-3 flex-grow flex flex-col">
                                <h3 className="text-xl sm:text-2xl font-bold font-heading text-secondary group-hover:text-primary transition-colors">{product.name}</h3>
                                <p className="text-secondary/70 text-sm leading-relaxed flex-grow">
                                    {product.desc}
                                </p>
                            </div>

                            <div className="pt-6 mt-auto">
                                <Button 
                                    variant="outline" 
                                    className="w-full relative overflow-hidden group/btn border-secondary/20 hover:border-primary hover:text-white transition-all bg-transparent"
                                    onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    <span className="relative z-10 flex items-center justify-center font-bold">
                                        Request Quote
                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                                    </span>
                                    <div className="absolute inset-0 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover/btn:scale-x-100" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Rich Mango Pulp Section */}
                <div className="relative bg-gradient-to-br from-primary to-orange-400 rounded-[3rem] p-8 sm:p-12 lg:p-16 overflow-hidden text-secondary shadow-2xl flex flex-col lg:flex-row items-center gap-12">
                    {/* Splash Background Decor */}
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/20 blur-3xl rounded-full pointer-events-none" />
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-600/20 blur-3xl rounded-full pointer-events-none" />
                    
                    {/* Content */}
                    <div className="lg:w-1/2 space-y-8 relative z-10 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-md text-secondary font-bold px-4 py-2 rounded-full text-sm">
                            <Droplets className="w-4 h-4" /> 100% Pure & Natural
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight text-white drop-shadow-sm">
                            Premium Alphonso <br/>Mango Pulp
                        </h2>
                        <p className="text-white/90 text-lg sm:text-xl font-medium max-w-xl mx-auto lg:mx-0">
                            The essence of summer, locked in a jar. No artificial flavors, no preservatives. Just 100% natural Devgadh Alphonso mangoes ready for your beverages and desserts.
                        </p>

                        {/* Badges */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-3 rounded-2xl font-bold text-white shadow-sm border border-white/30">
                                <Leaf className="w-5 h-5" /> No Additives
                            </div>
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-3 rounded-2xl font-bold text-white shadow-sm border border-white/30">
                                <ShoppingBag className="w-5 h-5" /> Bulk Export
                            </div>
                        </div>

                        <Button size="lg" className="bg-white text-primary hover:bg-secondary hover:text-white border-transparent w-full sm:w-auto mt-6 shadow-xl hover:shadow-2xl">
                            Download Spec Sheet
                        </Button>
                    </div>

                    {/* Rich Imagery Area */}
                    <div className="lg:w-1/2 relative w-full aspect-square max-w-lg mx-auto z-10">
                        {/* We use the pulp image, scaled up and styled to look premium */}
                        <div className="absolute inset-0 bg-white/20 backdrop-blur-3xl rounded-full transform rotate-12 scale-90 border-4 border-white/30 shadow-[0_0_100px_rgba(255,255,255,0.4)]" />
                        <Image
                            src="/images/pulp-product.png"
                            alt="Mango Pulp Jar"
                            fill
                            className="object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-700 ease-out p-8 relative z-10"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>

            {/* Organic SVG Divider Bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none text-white">
                <svg className="relative block h-[50px] sm:h-[100px] w-[calc(100%+1.3px)]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
                </svg>
            </div>
        </section>
    );
}
