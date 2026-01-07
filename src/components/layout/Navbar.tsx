"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

    // Lock body scroll when menu is open
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
            x: "100%",
            transition: {
                duration: 0.4,
                type: "spring",
                damping: 25,
                stiffness: 200
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                type: "spring",
                damping: 25,
                stiffness: 200
            }
        }
    };

    const linkVariants = {
        closed: { x: 50, opacity: 0 },
        open: (i: number) => ({
            x: 0,
            opacity: 1,
            transition: { delay: 0.1 + i * 0.1, duration: 0.4 }
        })
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled
                    ? "glass-panel py-3 border-white/20"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group z-50 relative">
                        <div className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center shadow-lg transition-colors",
                            isOpen ? "bg-white text-brand-navy" : "bg-brand-navy text-white group-hover:bg-brand-mango"
                        )}>
                            <Anchor className="w-6 h-6" />
                        </div>
                        <span className={cn(
                            "text-2xl font-bold tracking-tight font-heading transition-colors",
                            isOpen ? "text-white" : (isScrolled ? "text-brand-navy" : "text-brand-navy drop-shadow-md")
                        )}>
                            Dongar To Darya
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-brand-navy hover:text-brand-clay font-medium transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button size="sm" variant="primary" onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}>
                            Get Quote
                        </Button>
                    </div>

                    {/* Mobile Menu Button - Z-index high to overlap menu */}
                    <div className="md:hidden z-50 relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn("transition-colors", isOpen ? "text-white" : "text-brand-navy")}
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-brand-navy z-40 flex flex-col justify-center px-8 md:hidden"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-mango/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="flex flex-col space-y-6 relative z-10">
                            {navLinks.map((link, i) => (
                                <motion.div key={link.name} custom={i} variants={linkVariants}>
                                    <Link
                                        href={link.href}
                                        className="text-4xl font-bold font-heading text-white hover:text-brand-mango transition-colors flex items-center justify-between group"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                        <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-brand-mango w-8 h-8" />
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                custom={navLinks.length}
                                variants={linkVariants}
                                className="pt-8"
                            >
                                <Button
                                    className="w-full text-lg py-6 bg-brand-mango text-brand-navy hover:bg-white"
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
