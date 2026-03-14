"use client";

import Image from "next/image";
import logisticMap from "../../../asserts/logistic exporter.webp";

export default function GlobalReach() {
    return (
        <section className="py-24 bg-secondary overflow-hidden relative" id="global">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    <div className="w-full md:w-1/2 space-y-8 text-white">
                        <div className="space-y-4">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Worldwide Network</span>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading">
                                Delivering to <br /><span className="text-accent">20+ Countries</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Our established logistics network ensures timely delivery to major ports across USA, Europe, Middle East, and Asia-Pacific.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {["United States", "United Kingdom", "Germany", "UAE", "Singapore", "Australia"].map((c) => (
                                <div key={c} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="text-sm font-medium text-gray-200">{c}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 h-[350px] md:h-[500px] relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl" />
                        <div className="relative w-full h-full">
                            <Image
                                src={logisticMap}
                                alt="Global Export Map"
                                fill
                                className="object-contain opacity-90 drop-shadow-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
