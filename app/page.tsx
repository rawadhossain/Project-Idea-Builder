import BenefitsSection from "@/components/BenefitsSection";
import ContentLibrarySection from "@/components/ContentLibrarySection";
import CtaSection from "@/components/CtaSection";
import FeaturesSection from "@/components/FeaturesSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-builder-background text-white overflow-x-hidden">
			<Navbar />

			<main>
				<HeroSection />
				<div className="h-px w-full bg-section-divider my-4"></div>
				<FeaturesSection />
				<div className="h-px w-full bg-section-divider my-4"></div>
				<BenefitsSection />
				<div className="h-px w-full bg-section-divider my-4"></div>
				<WhyChooseSection />
				<div className="h-px w-full bg-section-divider my-4"></div>
				<TestimonialsSection />
				<div className="h-px w-full bg-section-divider my-4"></div>
				<ContentLibrarySection />
				<div className="h-px w-full bg-section-divider my-4"></div>
				<CtaSection />
			</main>

			<FooterSection />
		</div>
	);
}
