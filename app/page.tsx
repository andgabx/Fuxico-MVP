import { AboutUs } from "@/components/AboutUs";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#FFE1BE]">
            <h1>Home</h1>
            <AboutUs />
            <Testimonials />
            <Footer />
        </div>
    );
}
