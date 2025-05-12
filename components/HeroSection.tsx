import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
	return (
		<section
			id="hero"
			className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16"
		>
			<div className="absolute inset-0 bg-hero-glow z-0"></div>

			{/* Decorative elements */}
			<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-builder-accent/5 rounded-full blur-3xl z-0 animate-pulse"></div>
			<div
				className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-builder-accent/10 rounded-full blur-3xl z-0 animate-pulse"
				style={{ animationDelay: "1s" }}
			></div>

			<div className="container mx-auto px-4 z-10 text-center">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide">
					The All-In-One Platform
					<br />
					<span className="glow-text">For Developer Project Ideas</span>
				</h1>

				<p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10">
					Let Builder match your skills, tech stack, and goals to AI-curated project
					ideas. Build smarter, not harder.
				</p>

				<Link href="/builder">
					<Button className="cta-button text-lg group animate-pulse-glow cursor-pointer">
						<Search className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
						Generate My First Idea
					</Button>
				</Link>

				{/* Mock UI Display */}
				<div className="mt-16 max-w-4xl mx-auto relative animate-float">
					<div className="bg-white/5 backdrop-blur-md rounded-lg border border-white/20 shadow-[0_0_30px_rgba(0,226,199,0.2)] overflow-hidden">
						<div className="bg-gray-900/80 p-2 border-b border-white/10 flex justify-between items-center">
							<div className="flex space-x-2">
								<div className="w-3 h-3 rounded-full bg-red-500"></div>
								<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
								<div className="w-3 h-3 rounded-full bg-green-500"></div>
							</div>
							<div className="text-xs text-white/70">builder.app</div>
							<div></div>
						</div>

						<div className="p-6">
							<div className="flex flex-col md:flex-row gap-6">
								<div className="flex-1">
									<h3 className="text-builder-accent text-xl mb-4">
										Project Ideas for You
									</h3>
									<div className="space-y-4">
										<div className="bg-white/5 p-4 rounded border border-white/10 hover:border-builder-accent/50 transition-colors cursor-pointer">
											<h4 className="font-medium">
												AI-Powered Code Reviewer
											</h4>
											<p className="text-sm text-white/70">
												Build a GitHub bot that analyzes PRs using AI
											</p>
											<div className="flex gap-2 mt-2">
												<span className="text-xs bg-builder-accent/20 text-builder-accent px-2 py-1 rounded">
													Python
												</span>
												<span className="text-xs bg-builder-accent/20 text-builder-accent px-2 py-1 rounded">
													OpenAI
												</span>
											</div>
										</div>

										<div className="bg-white/5 p-4 rounded border border-builder-accent/30 glow-border">
											<h4 className="font-medium">Dev Portfolio Generator</h4>
											<p className="text-sm text-white/70">
												Create a tool that builds portfolios from GitHub
												activity
											</p>
											<div className="flex gap-2 mt-2">
												<span className="text-xs bg-builder-accent/20 text-builder-accent px-2 py-1 rounded">
													React
												</span>
												<span className="text-xs bg-builder-accent/20 text-builder-accent px-2 py-1 rounded">
													GitHub API
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="flex-1">
									<div className="bg-white/5 p-4 rounded border border-white/10 h-full">
										<h3 className="text-builder-accent text-xl mb-3">
											Project Chat
										</h3>
										<div className="space-y-3">
											<div className="flex gap-3">
												<div className="w-8 h-8 rounded-full bg-builder-accent/30 flex items-center justify-center text-builder-accent">
													B
												</div>
												<div className="bg-gray-800/50 rounded-lg p-3 text-sm">
													<p>
														How would you like to customize this project
														idea?
													</p>
												</div>
											</div>
											<div className="flex gap-3 justify-end">
												<div className="bg-builder-accent/20 rounded-lg p-3 text-sm">
													<p>Can we use Next.js instead of React?</p>
												</div>
												<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
													U
												</div>
											</div>
											<div className="flex gap-3">
												<div className="w-8 h-8 rounded-full bg-builder-accent/30 flex items-center justify-center text-builder-accent">
													B
												</div>
												<div className="bg-gray-800/50 rounded-lg p-3 text-sm">
													<p>
														Great choice! I've updated your project
														stack to Next.js...
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Reflection effect */}
					<div className="w-full h-20 bg-gradient-to-b from-builder-accent/5 to-transparent rounded-b-lg transform -scale-y-100 opacity-30 blur-sm"></div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
