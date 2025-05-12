const FooterSection = () => {
	return (
		<footer className="bg-black/30 pt-16 pb-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
					<div>
						<h3 className="text-xl font-semibold mb-4">Product</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-builder-accent transition-colors"
								>
									Generate Idea
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-builder-accent transition-colors"
								>
									Chat
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-builder-accent transition-colors"
								>
									Favorites
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-builder-accent transition-colors"
								>
									Recents
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-semibold mb-4">Use Cases</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-builder-accent transition-colors"
								>
									Beginners
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-builder-accent transition-colors"
								>
									Full-Stack Devs
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-builder-accent transition-colors"
								>
									Hackathon Projects
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-builder-accent transition-colors"
								>
									Portfolio Building
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-semibold mb-4">Company</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-builder-accent transition-colors"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-builder-accent transition-colors"
								>
									Blog
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-builder-accent transition-colors"
								>
									Roadmap
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-builder-accent transition-colors"
								>
									Twitter
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-semibold mb-4">Support</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-builder-accent transition-colors"
								>
									Contact
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-builder-accent transition-colors"
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-builder-accent transition-colors"
								>
									Docs
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/70 hover:text-builder-accent transition-colors"
								>
									FAQs
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<div className="flex items-center justify-center md:justify-start">
							<span className="text-xl font-bold tracking-wider text-white">
								Builder<span className="text-builder-accent">.</span>
							</span>
						</div>
						<p className="text-white/50 text-sm mt-2">
							© 2025 Builder. All Rights Reserved.
						</p>
					</div>

					<div className="flex gap-6">
						<a
							href="#"
							className="text-white/70 hover:text-builder-accent transition-colors"
						>
							Terms
						</a>
						<a
							href="#"
							className="text-white/70 hover:text-builder-accent transition-colors"
						>
							Privacy
						</a>
						<a
							href="#"
							className="text-white/70 hover:text-builder-accent transition-colors"
						>
							Cookies
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterSection;
