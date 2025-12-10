import { AboutUs } from "@/components/AboutUs";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Releases } from "@/components/Releases";
import { Plans } from "@/components/Plans";
import { Hero } from "@/components/Hero";
import { PromoBanner } from "@/components/PromoBanner";
import { Benefits } from "@/components/Benefits";

export default function Home() {
    return (
        <div>
            <PromoBanner />
            <Hero />
            <Releases />
            <AboutUs />
            <Benefits />
            <Plans />
            <Testimonials />
            <Footer />
        </div>
    );
}
