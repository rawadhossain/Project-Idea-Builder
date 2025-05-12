import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
	return (
		<section id="benefits" className="section-padding">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="section-title">
						Discover the <span className="glow-text">Builder Platform</span>
					</h2>
					<p className="section-subtitle">
						From concept to code, Builder gives you everything you need to bring your
						ideas to life.
					</p>
				</div>

				<div className="space-y-24">
					{/* First benefit */}
					<div className="flex flex-col md:flex-row items-center gap-8">
						<div className="md:w-1/2">
							<div className="glass-card p-6 md:p-8 animate-float">
								<div className="rounded-md overflow-hidden">
									<div className="bg-gray-900/80 p-2 border-b border-white/10 flex justify-between items-center">
										<div className="flex space-x-2">
											<div className="w-3 h-3 rounded-full bg-red-500"></div>
											<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
											<div className="w-3 h-3 rounded-full bg-green-500"></div>
										</div>
										<div className="text-xs text-white/70">
											API-powered Dashboard
										</div>
										<div></div>
									</div>
									<div className="bg-gray-800/50 p-4">
										<div className="space-y-3">
											<div className="h-6 w-3/4 bg-white/10 rounded"></div>
											<div className="h-6 w-1/2 bg-white/10 rounded"></div>
											<div className="h-20 bg-builder-accent/20 rounded mt-4 flex items-center justify-center">
												<div className="text-builder-accent text-xs">
													API Dashboard Preview
												</div>
											</div>
											<div className="grid grid-cols-3 gap-2 mt-2">
												<div className="h-8 bg-white/10 rounded"></div>
												<div className="h-8 bg-white/10 rounded"></div>
												<div className="h-8 bg-builder-accent/30 rounded"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="md:w-1/2">
							<h3 className="text-2xl md:text-3xl font-bold mb-4">
								API-Powered Data Visualization
							</h3>
							<p className="text-white/80 mb-6">
								Build real-world projects that connect to live APIs. Builder
								generates ideas that use public APIs, making your portfolio pieces
								functional and impressive to employers.
							</p>
							<ul className="space-y-3 mb-6">
								<li className="flex items-start">
									<div className="mr-3 mt-1 text-builder-accent">✓</div>
									<p>Curated list of beginner-friendly public APIs</p>
								</li>
								<li className="flex items-start">
									<div className="mr-3 mt-1 text-builder-accent">✓</div>
									<p>Fetch, display, and manipulate real-world data</p>
								</li>
								<li className="flex items-start">
									<div className="mr-3 mt-1 text-builder-accent">✓</div>
									<p>Authentication implementation suggestions</p>
								</li>
							</ul>
							<Button className="cta-button">Explore API Projects</Button>
						</div>
					</div>

					{/* Second benefit */}
					<div className="flex flex-col md:flex-row-reverse items-center gap-8">
						<div className="md:w-1/2">
							<div
								className="glass-card p-6 md:p-8 animate-float"
								style={{ animationDelay: "1s" }}
							>
								<div className="rounded-md overflow-hidden">
									<div className="bg-gray-900/80 p-2 border-b border-white/10 flex justify-between items-center">
										<div className="flex space-x-2">
											<div className="w-3 h-3 rounded-full bg-red-500"></div>
											<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
											<div className="w-3 h-3 rounded-full bg-green-500"></div>
										</div>
										<div className="text-xs text-white/70">AI SaaS Web App</div>
										<div></div>
									</div>
									<div className="bg-gray-800/50 p-4">
										<div className="space-y-4">
											<div className="flex justify-between items-center">
												<div className="h-8 w-24 bg-builder-accent/30 rounded"></div>
												<div className="h-8 w-8 bg-white/10 rounded-full"></div>
											</div>
											<div className="h-32 bg-white/5 rounded border border-white/10 p-3">
												<div className="h-4 w-3/4 bg-white/10 rounded mb-2"></div>
												<div className="h-4 w-1/2 bg-white/10 rounded mb-2"></div>
												<div className="h-4 w-2/3 bg-white/10 rounded"></div>
											</div>
											<div className="h-10 bg-builder-accent/30 rounded-md w-full"></div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="md:w-1/2">
							<h3 className="text-2xl md:text-3xl font-bold mb-4">
								AI-Powered SaaS Applications
							</h3>
							<p className="text-white/80 mb-6">
								Create cutting-edge applications that leverage AI capabilities.
								Builder helps you design modern SaaS products that solve real
								problems using the latest AI technologies.
							</p>
							<ul className="space-y-3 mb-6">
								<li className="flex items-start">
									<div className="mr-3 mt-1 text-builder-accent">✓</div>
									<p>Integration with popular AI APIs like OpenAI</p>
								</li>
								<li className="flex items-start">
									<div className="mr-3 mt-1 text-builder-accent">✓</div>
									<p>Subscription model implementation guides</p>
								</li>
								<li className="flex items-start">
									<div className="mr-3 mt-1 text-builder-accent">✓</div>
									<p>User authentication and dashboard templates</p>
								</li>
							</ul>
							<Button className="cta-button">Discover AI Projects</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BenefitsSection;
