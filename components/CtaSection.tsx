import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const CtaSection = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto px-4">
				<div className="bg-gradient-to-b from-builder-accent/10 to-transparent rounded-lg border border-builder-accent/30 p-10 md:p-16 text-center relative overflow-hidden">
					{/* Decorative elements */}
					<div className="absolute top-0 left-1/4 w-64 h-64 bg-builder-accent/10 rounded-full blur-3xl"></div>
					<div className="absolute bottom-0 right-1/4 w-64 h-64 bg-builder-accent/10 rounded-full blur-3xl"></div>

					<div className="relative z-10">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Start your journey
							<br />
							with <span className="glow-text">Builder</span>
						</h2>

						<p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
							Stop staring at blank editors. Get inspired and start building projects
							that matter.
						</p>

						<Button className="cta-button text-lg animate-pulse-glow">
							<Sparkles className="mr-2 h-5 w-5" />
							Generate My First Project Idea
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
