"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const products = [
    {
        id: "mango",
        name: "Alphonso Mangoes",
        desc: "The King of Mangoes. GI-tagged Ratnagiri Alphonso with rich aroma and sweetness.",
        price: "Variable / Dozen",
        image: "/images/mango-product.png"
    },
    {
        id: "pulp",
        name: "Premium Mango Pulp",
        desc: "100% natural, additive-free pulp. Ideal for beverages and confectionery.",
        price: "Variable / Kg",
        image: "/images/pulp-product.png"
    },
    {
        id: "cashew",
        name: "Jumbo Cashews",
        desc: "W180/W240 Grade. Crisp, whole kernels processed in hygienic facilities.",
        price: "Variable / Kg",
        image: "/images/cashew-product.png"
    },
];

export default function ProductShowcase() {
    return (
        <section id="products" className="py-24 bg-brand-beige">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-brand-clay font-bold tracking-widest uppercase text-sm">Agriculture</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-navy">
                        Our Premium <span className="text-brand-mango">Harvest</span>
                    </h2>
                    <p className="text-brand-navy/70 max-w-2xl mx-auto">
                        Directly sourced. Meticulously graded. Export ready.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative bg-white rounded-3xl p-6 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl border border-transparent hover:border-brand-mango/20">

                            {/* Product Image Area */}
                            <div className="h-64 w-full bg-brand-beige/50 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center p-4">
                                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain drop-shadow-2xl mix-blend-multiply"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-bold font-heading text-brand-navy">{product.name}</h3>
                                </div>
                                <p className="text-brand-navy/70 text-sm leading-relaxed min-h-[60px]">
                                    {product.desc}
                                </p>
                                <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                                    <Button variant="outline" size="sm" className="w-full group-hover:bg-brand-mango group-hover:text-brand-navy group-hover:border-brand-mango">
                                        View Details <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>

                            {/* Floating Tag */}
                            <div className="absolute top-6 right-6 bg-brand-green/10 text-brand-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                Export Grade
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
