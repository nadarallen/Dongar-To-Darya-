import StoryTimeline from "@/components/home/StoryTimeline";
import TrustInfographic from "@/components/home/TrustInfographic";
import QualityIngredients from "@/components/home/QualityIngredients";
import ProductShowcase from "@/components/home/ProductShowcase";
import OrderCalculator from "@/components/home/OrderCalculator";
import ContactSection from "@/components/home/ContactSection";
import GlobalReach from "@/components/home/GlobalReach";

import Hero from "@/components/home/Hero";

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
