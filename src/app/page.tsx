import dynamic from 'next/dynamic';
import Hero from "@/components/home/Hero";

const StoryTimeline = dynamic(() => import("@/components/home/StoryTimeline"), { ssr: false });
const TrustInfographic = dynamic(() => import("@/components/home/TrustInfographic"), { ssr: false });
const QualityIngredients = dynamic(() => import("@/components/home/QualityIngredients"), { ssr: false });
const ProductShowcase = dynamic(() => import("@/components/home/ProductShowcase"), { ssr: false });
const OrderCalculator = dynamic(() => import("@/components/home/OrderCalculator"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/home/ContactSection"), { ssr: false });
const GlobalReach = dynamic(() => import("@/components/home/GlobalReach"), { ssr: false });

export default function Home() {
    return (
        <>
            <Hero />
            <StoryTimeline />
            <TrustInfographic />
            <QualityIngredients />
            <ProductShowcase />
            <GlobalReach />
            <OrderCalculator />
            <ContactSection />
        </>
    );
}
