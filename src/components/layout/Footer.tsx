import React from "react";
import { Anchor, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../asserts/Dongar_To_Darya_1.jpg.jpeg";
import { Button } from "@/components/ui/Button";

const Footer = () => {
    return (
        <footer className="bg-secondary text-background pt-20 pb-10 border-t-4 border-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Story Column */}
                    <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex items-center gap-3">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-lg shadow-primary/20 border-2 border-primary/50 bg-background">
                                <Image src={logo} alt="Dongara To Darya Logo" fill className="object-cover" />
                            </div>
                            <span className="text-3xl font-bold font-heading text-primary">Dongara To Darya</span>
                        </div>
                        <p className="text-background/80 text-base leading-relaxed">
                            Every mango and cashew we export carries the warmth of Indian sun and the richness of our soil. We bridge the gap between local coastal farms and global markets with unyielding trust.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors"><Linkedin size={20} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-xl font-bold mb-6 text-primary font-heading tracking-wide">Explore</h3>
                        <ul className="space-y-4 text-base text-background/80">
                            <li><Link href="/" className="hover:text-primary transition-colors flex items-center gap-2 border-b border-transparent hover:border-primary pb-1">Our Homepage</Link></li>
                            <li><Link href="#about" className="hover:text-primary transition-colors flex items-center gap-2 border-b border-transparent hover:border-primary pb-1">The Farm Story</Link></li>
                            <li><Link href="#process" className="hover:text-primary transition-colors flex items-center gap-2 border-b border-transparent hover:border-primary pb-1">Our Process</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors flex items-center gap-2 border-b border-transparent hover:border-primary pb-1">Get in Touch</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-xl font-bold mb-6 text-primary font-heading tracking-wide">Pantry</h3>
                        <ul className="space-y-4 text-base text-background/80">
                            <li className="hover:text-primary transition-colors cursor-pointer">Alphonso Mangoes</li>
                            <li className="hover:text-primary transition-colors cursor-pointer">Kesar Mangoes</li>
                            <li className="hover:text-primary transition-colors cursor-pointer">Pure Mango Pulp</li>
                            <li className="hover:text-primary transition-colors cursor-pointer">Jumbo Cashews</li>
                            <li className="hover:text-primary transition-colors cursor-pointer">Aromatic Spices</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-xl font-bold mb-6 text-primary font-heading tracking-wide">Reach Us</h3>
                        <ul className="space-y-5 text-base text-background/80">
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                                <MapPin className="w-6 h-6 text-primary shrink-0" />
                                <span>
                                    Mata Prasad Tiwari Chawal, Kajuwadi no-2,<br />
                                    Parshiwada, Andheri East, Mumbai - 400099
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+91 84199 21183</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href="mailto:export@dongaratodarya.com" className="hover:text-primary transition-colors">export@dongaratodarya.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-background/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/60 gap-4">
                    <p>© {new Date().getFullYear()} Dongara To Darya. Handcrafted with care.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
