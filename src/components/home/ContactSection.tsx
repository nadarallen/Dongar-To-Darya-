"use client";



import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Mail, MessageCircle, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleWhatsApp = () => {
        if (!name || !message) {
            window.open("https://wa.me/918419921183", "_blank");
            return;
        }

        const text = `*New General Inquiry*\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
        window.open(`https://wa.me/918419921183?text=${encodeURIComponent(text)}`, "_blank");
    };

    const handleEmail = () => {
        window.location.href = "mailto:export@dongaratodarya.com";
    };

    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-2xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="text-center space-y-4">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm">Get in Touch</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-secondary">
                            Headquartered in <span className="text-primary">Mumbai</span>
                        </h2>
                        <p className="text-secondary/70 text-lg leading-relaxed">
                            Visit our office or send us a direct message below.
                        </p>
                    </div>

                    {/* Enquiry Form */}
                    <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-secondary outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Phone</label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-secondary outline-none transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Message</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="How can we help you?"
                                rows={3}
                                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-secondary outline-none resize-none transition-all"
                            />
                        </div>
                        <Button onClick={handleWhatsApp} size="lg" className="w-full bg-[#25D366] hover:bg-[#20bd5a] border-none text-white shadow-md hover:shadow-lg hover:-translate-y-0.5">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Send Message via WhatsApp
                        </Button>
                    </div>

                    {/* Static Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="w-12 h-12 bg-secondary/5 rounded-full flex items-center justify-center shrink-0">
                                <MapPin className="text-secondary w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-secondary text-sm">Registered Office</h4>
                                <p className="text-secondary/60 text-sm leading-snug">Mata Prasad Tiwari Chawal, Kajuwadi no-2,<br /> Parshiwada, Andheri East, Mumbai - 99</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="w-12 h-12 bg-secondary/5 rounded-full flex items-center justify-center shrink-0">
                                <Phone className="text-secondary w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-secondary text-sm">Phone Support</h4>
                                <p className="text-secondary/60 text-sm">+91 84199 21183</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
