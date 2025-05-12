import { Lightbulb, MessageSquare, Star, Brain, Target, Rocket } from "lucide-react";

const features = [
	{
		icon: <Lightbulb className="h-8 w-8 text-builder-accent" />,
		title: "Personalized Suggestions",
		description: "Ideas based on your skills, tech stack, and learning goals",
	},
	{
		icon: <MessageSquare className="h-8 w-8 text-builder-accent" />,
		title: "Chat With Builder",
		description: "Ask questions, refine ideas, or swap tech stacks in real-time",
	},
	{
		icon: <Star className="h-8 w-8 text-builder-accent" />,
		title: "Favorites & Recents",
		description: "Save ideas you love and track your development journey",
	},
	{
		icon: <Brain className="h-8 w-8 text-builder-accent" />,
		title: "AI-Powered Insights",
		description: "Tailored recommendations based on current tech trends",
	},
	{
		icon: <Target className="h-8 w-8 text-builder-accent" />,
		title: "Project Complexity Match",
		description: "Find ideas that match your experience level and timeline",
	},
	{
		icon: <Rocket className="h-8 w-8 text-builder-accent" />,
		title: "Ready-to-Code Templates",
		description: "Start coding instantly with project scaffolding suggestions",
	},
];

const FeaturesSection = () => {
	return (
		<section id="features" className="section-padding relative overflow-hidden">
			<div className="absolute inset-0 bg-builder-accent/5 bg-hero-glow z-0"></div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-16">
					<h2 className="section-title">
						What Makes <span className="glow-text">Builder</span> Stand Out?
					</h2>
					<p className="section-subtitle">
						Our platform combines cutting-edge AI with developer-focused features to
						deliver a seamless project ideation experience.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="feature-card flex flex-col items-center text-center"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="mb-4 p-3 rounded-full bg-builder-accent/10 glow-border">
								{feature.icon}
							</div>
							<h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
							<p className="text-white/70">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
