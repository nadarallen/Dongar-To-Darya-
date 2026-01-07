"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Calculator, PackageCheck, Globe2, User, Building2, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
    { id: "mango", name: "Alphonso Mangoes", unit: "Dozen", basePrice: 800 },
    { id: "pulp", name: "Mango Pulp", unit: "Kg", basePrice: 150 },
    { id: "cashew", name: "Jumbo Cashews", unit: "Kg", basePrice: 1200 },
];

const countries = [
    "India (Domestic)", "United States", "United Kingdom", "UAE", "Germany", "Singapore", "Australia", "Other"
];

export default function OrderCalculator() {
    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const [quantity, setQuantity] = useState(100);
    const [country, setCountry] = useState("India (Domestic)");

    // New Fields
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState<{ name?: boolean; mobile?: boolean }>({});

    const estimatedCost = selectedProduct.basePrice * quantity;

    const handleWhatsApp = () => {
        const newErrors = {
            name: !name.trim(),
            mobile: !mobile.trim()
        };

        if (newErrors.name || newErrors.mobile) {
            setErrors(newErrors);
            return;
        }
        setErrors({});

        const message = `*New Quote Request from Website*\n\n` +
            `*Customer Details:*\n` +
            `Name: ${name}\n` +
            `Company: ${company || "N/A"}\n` +
            `Phone: ${mobile}\n` +
            `Address: ${address || "N/A"}\n\n` +
            `*Order Requirement:*\n` +
            `Product: ${selectedProduct.name}\n` +
            `Quantity: ${quantity} ${selectedProduct.unit}\n` +
            `Destination: ${country}\n` +
            `Est. Value: ₹${estimatedCost.toLocaleString()}\n\n` +
            `Please provide a formal quote including shipping.`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/918419921183?text=${encodedMessage}`, '_blank');
    };

    return (
        <section className="py-24 bg-brand-navy relative overflow-hidden" id="calculator">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/5 rounded-l-[10rem] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Content */}
                    <div className="space-y-8 text-white">
                        <div className="space-y-4">
                            <span className="text-brand-mango font-bold tracking-widest uppercase text-sm">Request a Quote</span>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading">
                                Wholesale <span className="text-brand-teal">Export</span> Inquiry
                            </h2>
                            <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
                                Get a custom quote for bulk orders. PAN India and Global shipping available. Fill in your requirements for best daily rates.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="glass-panel bg-white/5 border-white/10 p-6 rounded-2xl">
                                <Globe2 className="w-8 h-8 text-brand-mango mb-4" />
                                <h4 className="font-bold text-lg mb-1">Domestic & Global</h4>
                                <p className="text-sm text-gray-400">Serving India & 20+ countries.</p>
                            </div>
                            <div className="glass-panel bg-white/5 border-white/10 p-6 rounded-2xl">
                                <PackageCheck className="w-8 h-8 text-brand-mango mb-4" />
                                <h4 className="font-bold text-lg mb-1">Premium Quality</h4>
                                <p className="text-sm text-gray-400">Certified export-grade produce.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Quote Form */}
                    <div className="glass-card bg-white rounded-3xl p-6 md:p-8 shadow-2xl border-t border-white/60 relative">
                        <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-mango rounded-2xl rotate-12 flex items-center justify-center shadow-lg hidden md:flex">
                            <Calculator className="w-10 h-10 text-brand-navy -rotate-12" />
                        </div>

                        <div className="space-y-6">
                            {/* --- Contact Details Section --- */}
                            <div className="space-y-4">
                                <h4 className="text-brand-navy font-bold flex items-center gap-2">
                                    <User size={18} /> Contact Information
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase">Your Name *</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value);
                                                if (errors.name) setErrors({ ...errors, name: false });
                                            }}
                                            placeholder="John Doe"
                                            className={cn(
                                                "w-full px-4 py-3 rounded-xl bg-gray-50 border focus:ring-0 outline-none text-brand-navy transition-colors placeholder:text-gray-400",
                                                errors.name ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-brand-navy"
                                            )}
                                        />
                                        {errors.name && <span className="text-xs text-red-500 font-bold">Name is required</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase">Phone Number *</label>
                                        <input
                                            type="tel"
                                            value={mobile}
                                            onChange={(e) => {
                                                setMobile(e.target.value);
                                                if (errors.mobile) setErrors({ ...errors, mobile: false });
                                            }}
                                            placeholder="+91 98765..."
                                            className={cn(
                                                "w-full px-4 py-3 rounded-xl bg-gray-50 border focus:ring-0 outline-none text-brand-navy transition-colors placeholder:text-gray-400",
                                                errors.mobile ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-brand-navy"
                                            )}
                                        />
                                        {errors.mobile && <span className="text-xs text-red-500 font-bold">Phone is required</span>}
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase">Company Name (Optional)</label>
                                        <input
                                            type="text"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            placeholder="Your Company Ltd."
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-navy focus:ring-0 outline-none text-brand-navy transition-colors placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase">Delivery Address</label>
                                        <textarea
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            placeholder="Full address for shipping calculation..."
                                            rows={2}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-navy focus:ring-0 outline-none text-brand-navy transition-colors placeholder:text-gray-400 resize-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            <hr className="border-dashed border-gray-200" />

                            {/* --- Order Details Section --- */}
                            <div className="space-y-4">
                                <h4 className="text-brand-navy font-bold flex items-center gap-2">
                                    <PackageCheck size={18} /> Order Details
                                </h4>

                                {/* Product Selection */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Select Product</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                        {products.map((p) => (
                                            <button
                                                type="button"
                                                key={p.id}
                                                onClick={() => setSelectedProduct(p)}
                                                className={cn(
                                                    "px-3 py-2 rounded-lg border text-sm font-bold transition-all",
                                                    selectedProduct.id === p.id
                                                        ? "bg-brand-navy text-white border-brand-navy shadow-lg"
                                                        : "bg-gray-50 text-gray-600 border-gray-200 hover:border-brand-navy/30"
                                                )}
                                            >
                                                {p.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Quantity & Country */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase">Quantity ({selectedProduct.unit})</label>
                                        <input
                                            type="number"
                                            min="1"
                                            value={quantity}
                                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-navy focus:ring-0 outline-none font-bold text-brand-navy transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase">Destination</label>
                                        <select
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-navy focus:ring-0 outline-none font-bold text-brand-navy transition-colors appearance-none"
                                        >
                                            {countries.map(c => <option key={c} value={c}>{c}</option>)}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Total & Action */}
                            <div className="pt-6 border-t border-gray-100 space-y-4">
                                <div className="flex justify-between items-end bg-brand-mango/10 p-4 rounded-xl">
                                    <span className="text-brand-navy/70 font-medium text-sm">Estimated Value</span>
                                    <span className="text-2xl font-bold text-brand-navy font-heading">
                                        ₹{estimatedCost.toLocaleString()}
                                    </span>
                                </div>

                                <Button
                                    onClick={handleWhatsApp}
                                    size="lg"
                                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Get Quote on WhatsApp
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
