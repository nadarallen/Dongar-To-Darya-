"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../asserts/Dongar_To_Darya_1.jpg.jpeg";
import { Menu, X, Anchor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; }
    }, [isOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "#products" },
        { name: "Process", href: "#process" },
        { name: "Contact", href: "#contact" },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const linkVariants = {
        closed: { y: 20, opacity: 0 },
        open: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: { delay: 0.2 + i * 0.1, duration: 0.4, ease: "easeOut" }
        })
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-4 border-b border-gray-100"
                    : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center relative">
                    
                    {/* Left: Logo */}
                    <div className="flex-1 flex justify-start">
                        <Link href="/" className="flex items-center gap-2 group z-50 relative" onClick={() => setIsOpen(false)}>
                            <div className={cn(
                                "relative w-14 h-14 rounded-full overflow-hidden border-2 border-transparent transition-all duration-300 shadow-md",
                                isOpen ? "border-secondary/20" : "group-hover:border-primary/50"
                            )}>
                                <Image src={logo} alt="Dongara To Darya Logo" fill className="object-cover" sizes="56px" />
                            </div>
                            <span className={cn(
                                "text-2xl font-bold tracking-tight font-heading transition-colors",
                                isOpen ? "text-secondary" : (isScrolled ? "text-secondary" : "text-secondary drop-shadow-sm")
                            )}>
                                Dongara To Darya
                            </span>
                        </Link>
                    </div>

                    {/* Center: Desktop Nav Links */}
                    <div className="hidden md:flex flex-1 justify-center items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "font-medium transition-colors hover:text-primary relative group",
                                    isScrolled ? "text-secondary/80" : "text-secondary"
                                )}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Right: Desktop CTA */}
                    <div className="hidden md:flex flex-1 justify-end">
                        <Button 
                            variant="primary" 
                            size="md"
                            className="text-white hover:shadow-primary/50"
                            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Request Quote
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden z-50 relative flex justify-end flex-1">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "w-12 h-12 flex items-center justify-center rounded-full transition-colors",
                                isOpen ? "bg-secondary/10 text-secondary" : "bg-white/50 text-secondary backdrop-blur-sm"
                            )}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay - Full Screen Smooth Slide */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-background z-40 flex flex-col justify-center px-6 sm:px-10 md:hidden overflow-hidden"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        {/* Organic Decor */}
                        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="flex flex-col space-y-2 relative z-10 mt-16 w-full max-w-sm mx-auto">
                            {navLinks.map((link, i) => (
                                <motion.div key={link.name} custom={i} variants={linkVariants}>
                                    <Link
                                        href={link.href}
                                        className="text-4xl sm:text-5xl font-bold font-heading text-secondary hover:text-primary transition-colors flex items-center justify-between group py-4 border-b border-secondary/10"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span>{link.name}</span>
                                        <div className="w-12 h-12 rounded-full bg-secondary/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <ArrowRight className="text-secondary group-hover:text-primary transition-colors w-6 h-6" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                            
                            <motion.div
                                custom={navLinks.length}
                                variants={linkVariants}
                                className="pt-12"
                            >
                                <Button
                                    size="lg"
                                    className="w-full text-lg py-6 font-bold shadow-xl"
                                    onClick={() => {
                                        setIsOpen(false);
                                        document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    Get Quote on WhatsApp
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
