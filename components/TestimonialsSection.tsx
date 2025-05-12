const testimonials = [
	{
		quote: "Builder gave me 3 solid portfolio ideas in 5 minutes! Each one matched my skills perfectly.",
		author: "Alex P.",
		role: "Frontend Developer",
	},
	{
		quote: "As a beginner, I finally felt confident enough to build something solo thanks to Builder's guidance.",
		author: "Sophia K.",
		role: "Coding Bootcamp Graduate",
	},
	{
		quote: "I used Builder to find a unique hackathon project. We won first place with our AI-powered solution!",
		author: "Marco T.",
		role: "Full Stack Developer",
	},
];

const TestimonialsSection = () => {
	return (
		<section id="testimonials" className="section-padding bg-black/20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="section-title">
						Customers <span className="glow-text">Love</span> Us
					</h2>
					<p className="section-subtitle max-w-3xl mx-auto">
						Join thousands of developers who have found their next great project with
						Builder.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="glass-card p-6 relative group">
							<div className="absolute inset-0 bg-gradient-to-t from-builder-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
							<div className="relative z-10">
								<div className="text-5xl text-builder-accent/20 mb-4">"</div>
								<p className="mb-6 text-white/90 italic">{testimonial.quote}</p>
								<div className="flex items-center">
									<div className="w-10 h-10 rounded-full bg-builder-accent/30 flex items-center justify-center text-builder-accent font-bold">
										{testimonial.author.charAt(0)}
									</div>
									<div className="ml-3">
										<div className="font-semibold">{testimonial.author}</div>
										<div className="text-sm text-white/60">
											{testimonial.role}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-16 flex flex-wrap justify-center gap-8 opacity-70">
					{/* Dummy company logos */}
					{[1, 2, 3, 4, 5].map((i) => (
						<div key={i} className="h-8 w-24 bg-white/10 rounded"></div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
