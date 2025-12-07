import { AboutUs } from "@/components/AboutUs";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Releases } from "@/components/Releases";
import { Plans } from "@/components/Plans";
import { Hero } from "@/components/Hero";

export default function Home() {
    return (
        <div className="bg-[#FFE1BE]">
            <Hero />
            <Releases />
            <AboutUs />
            <Plans />
            <Testimonials />
            <Footer />
        </div>
    );
}
