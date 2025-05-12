import { Clock, Zap, Brain, ArrowRight, Rocket } from "lucide-react";

const reasons = [
	{
		icon: <Clock className="h-6 w-6 text-builder-accent" />,
		title: "Instant Inspiration",
		description:
			"Stop wasting time deciding what to build – get matched with the perfect project in seconds.",
	},
	{
		icon: <Zap className="h-6 w-6 text-builder-accent" />,
		title: "Fast Execution",
		description:
			"Ideas come with complexity ratings and estimated timelines that match your availability.",
	},
	{
		icon: <Brain className="h-6 w-6 text-builder-accent" />,
		title: "AI That Understands",
		description:
			"Our custom GPT models understand developer skills, goals, and learning paths.",
	},
	{
		icon: <ArrowRight className="h-6 w-6 text-builder-accent" />,
		title: "Iterate Freely",
		description:
			"Chat-based iteration lets you refine any idea until it perfectly matches your vision.",
	},
	{
		icon: <Rocket className="h-6 w-6 text-builder-accent" />,
		title: "Full Stack Ready",
		description:
			"Get front-end, back-end, and API recommendations tailored to your project scope.",
	},
];

const WhyChooseSection = () => {
	return (
		<section className="section-padding bg-gradient-to-b from-builder-background to-builder-background/95">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="section-title">
						Why Candidates And Recruiting
						<br />
						Teams Love <span className="glow-text">Builder</span>
					</h2>
					<p className="section-subtitle max-w-3xl mx-auto">
						From bootcamp graduates to senior developers, Builder helps developers
						showcase their talents through meaningful projects.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{reasons.map((reason, index) => (
						<div
							key={index}
							className="glass-card p-6 hover:bg-white/5 transition-colors"
						>
							<div className="mb-4 inline-flex rounded-full bg-builder-accent/10 p-3">
								{reason.icon}
							</div>
							<h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
							<p className="text-white/70 text-sm">{reason.description}</p>
						</div>
					))}
				</div>

				<div className="mt-16 bg-card-glow border border-white/10 rounded-lg p-6 md:p-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center md:text-left">
							<div className="text-builder-accent text-5xl font-bold mb-2">5×</div>
							<p className="text-white/70">
								Faster project ideation compared to manual research
							</p>
						</div>

						<div className="text-center">
							<div className="text-builder-accent text-5xl font-bold mb-2">85%</div>
							<p className="text-white/70">
								Users report higher project completion rates
							</p>
						</div>

						<div className="text-center md:text-right">
							<div className="text-builder-accent text-5xl font-bold mb-2">1000+</div>
							<p className="text-white/70">
								Unique project ideas in our constantly growing database
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseSection;
