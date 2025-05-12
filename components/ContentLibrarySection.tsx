import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
	{
		title: "Full-Stack E-Commerce Platform",
		description:
			"Build a modern shopping experience with React, Node.js and Stripe integration",
		tags: ["React", "Node.js", "Stripe"],
		image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
	},
	{
		title: "AI Content Summarizer",
		description: "Create an app that uses AI to generate summaries of articles and blog posts",
		tags: ["OpenAI", "Next.js", "API"],
		image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
	},
	{
		title: "Real-time Chat Application",
		description: "Develop a modern chat app with user authentication and real-time messaging",
		tags: ["Firebase", "React", "WebSockets"],
		image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
	},
];

const ContentLibrarySection = () => {
	return (
		<section id="library" className="section-padding">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="section-title">
						Discover Trending Content From
						<br />
						Our <span className="glow-text">Resource Library</span>
					</h2>
					<p className="section-subtitle">
						Browse popular project ideas that developers are building right now.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{projects.map((project, index) => (
						<div key={index} className="glass-card overflow-hidden group">
							<div className="h-48 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-builder-background to-transparent opacity-70"></div>
							</div>
							<div className="p-6 relative">
								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-white/70 text-sm mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag, i) => (
										<span
											key={i}
											className="text-xs bg-builder-accent/20 text-builder-accent px-2 py-1 rounded"
										>
											{tag}
										</span>
									))}
								</div>
								<Button className="w-full bg-white/5 hover:bg-builder-accent/20 border border-white/10 hover:border-builder-accent/30 text-white group">
									View Details
									<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
								</Button>
							</div>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<Button className="cta-button">Browse All Project Ideas</Button>
				</div>
			</div>
		</section>
	);
};

export default ContentLibrarySection;
