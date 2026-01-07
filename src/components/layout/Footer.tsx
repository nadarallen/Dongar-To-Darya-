import { Anchor, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const Footer = () => {
    return (
        <footer className="bg-brand-navy text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-brand-mango rounded-lg flex items-center justify-center">
                                <Anchor className="text-brand-navy w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold font-heading">Dongar To Darya</span>
                        </div>
                        <p className="text-brand-beqige/80 text-sm leading-relaxed">
                            Premium Indian exports bridging the gap between local farms and global markets.
                            Reliability, Quality, and Trust.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-brand-mango">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/" className="hover:text-white hover:underline decoration-brand-mango underline-offset-4">Home</Link></li>
                            <li><Link href="#about" className="hover:text-white hover:underline decoration-brand-mango underline-offset-4">Our Story</Link></li>
                            <li><Link href="#process" className="hover:text-white hover:underline decoration-brand-mango underline-offset-4">Process</Link></li>
                            <li><Link href="#contact" className="hover:text-white hover:underline decoration-brand-mango underline-offset-4">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-brand-mango">Products</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>Alphonso Mangoes</li>
                            <li>Kesar Mangoes</li>
                            <li>Mango Pulp</li>
                            <li>Premium Cashews</li>
                            <li>Spices</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-brand-mango">Mumbai Office</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-brand-mango shrink-0" />
                                <span>
                                    Mata Prasad Tiwari Chawal, Kajuwadi no - 2 ,<br />
                                    Parshiwada, Andheri east , Mumbai - 400099
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-brand-mango shrink-0" />
                                <span>+91 84199 21183</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-brand-mango shrink-0" />
                                <span>export@dongartodarya.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Dongar To Darya. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
