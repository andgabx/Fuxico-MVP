import { Header } from "@/components/Header";
import { Plans } from "@/components/Plans";
import { Footer } from "@/components/Footer";
import { HeroOurPlans } from "@/components/ourplans/HeroOurPlans";
import { HowItWorks } from "@/components/ourplans/HowItWorks";

export default function OurPlans() {
    return (
        <div>
            <Header />
            <HeroOurPlans />
            <HowItWorks />
            <Plans />
            <Footer />
        </div>
    );
}
