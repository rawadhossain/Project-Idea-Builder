"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// const toggleDarkMode = () => {
	// 	setDarkMode(!darkMode);
	// };

	const handleGenerateClick = () => {
		const heroSection = document.getElementById("hero");
		if (heroSection) {
			heroSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-300 ${
				scrolled ? "bg-builder-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4 py-4">
				<div className="flex justify-between items-center">
					{/* Logo */}
					<a href="#" className="flex items-center">
						<span className="text-xl font-bold tracking-wider text-white">
							Builder<span className="text-builder-accent">.</span>
						</span>
					</a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<div className="space-x-6">
							<a
								href="#features"
								className="text-white/80 hover:text-builder-accent transition-colors"
							>
								Product
							</a>
							<a
								href="#benefits"
								className="text-white/80 hover:text-builder-accent transition-colors"
							>
								Features
							</a>
							<a
								href="#library"
								className="text-white/80 hover:text-builder-accent transition-colors"
							>
								Library
							</a>
							<a
								href="#testimonials"
								className="text-white/80 hover:text-builder-accent transition-colors"
							>
								Favorites
							</a>
						</div>

						<div className="flex items-center gap-4">
							{/* <Button
								size="sm"
								variant="ghost"
								className="rounded-full p-0 w-9 h-9 text-white/80"
								onClick={toggleDarkMode}
							>
								{darkMode ? (
									<Sun className="h-4 w-4" />
								) : (
									<Moon className="h-4 w-4" />
								)}
								<span className="sr-only">Toggle theme</span>
							</Button> */}

							<Button onClick={handleGenerateClick} className="cta-button">
								Generate Idea
							</Button>
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="flex items-center md:hidden gap-4">
						{/* <Button
							size="sm"
							variant="ghost"
							className="rounded-full p-0 w-9 h-9 text-white/80"
							onClick={toggleDarkMode}
						>
							{darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
							<span className="sr-only">Toggle theme</span>
						</Button> */}

						<Button
							variant="ghost"
							size="sm"
							className="text-white"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						>
							{mobileMenuOpen ? <X /> : <Menu />}
						</Button>
					</div>
				</div>

				{/* Mobile menu */}
				{mobileMenuOpen && (
					<div className="md:hidden py-4 bg-builder-background/95 backdrop-blur-lg rounded-md mt-2 border border-white/10">
						<div className="flex flex-col space-y-4 px-4">
							<a
								href="#features"
								className="text-white/80 hover:text-builder-accent py-2"
								onClick={() => setMobileMenuOpen(false)}
							>
								Product
							</a>
							<a
								href="#benefits"
								className="text-white/80 hover:text-builder-accent py-2"
								onClick={() => setMobileMenuOpen(false)}
							>
								Features
							</a>
							<a
								href="#library"
								className="text-white/80 hover:text-builder-accent py-2"
								onClick={() => setMobileMenuOpen(false)}
							>
								Library
							</a>
							<a
								href="#testimonials"
								className="text-white/80 hover:text-builder-accent py-2"
								onClick={() => setMobileMenuOpen(false)}
							>
								Favorites
							</a>
							<Button
								onClick={() => {
									handleGenerateClick();
									setMobileMenuOpen(false);
								}}
								className="cta-button w-full"
							>
								Generate Idea
							</Button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
