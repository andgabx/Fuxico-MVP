import { AboutUs } from "@/components/AboutUs";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Releases } from "@/components/Releases";
import { Plans } from "@/components/Plans";

export default function Home() {
    return (
        <div className="bg-[#FFE1BE]">
            <Header />
            <Releases />
            <AboutUs />
            <Plans />
            <Testimonials />
            <Footer />
        </div>
    );
}
