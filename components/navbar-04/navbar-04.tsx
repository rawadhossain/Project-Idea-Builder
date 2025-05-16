import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ThemeToggle } from "../ThemeToggle";
import Link from "next/link";
import { Bug } from "lucide-react";

const NavbarBuilder = () => {
	return (
		<div className="h-20 fixed top-0 inset-x-0">
			<nav className="fixed top-3 inset-x-4 h-13 bg-background border dark:border-stone-700/70 shadow-2xl max-w-screen-xl mx-auto rounded-full">
				<div className="h-full flex items-center justify-between mx-auto px-4 cursor-pointer">
					<Link href="/" className="flex items-center gap-2">
						{/* <Logo /> */}
						<Bug className="ml-4 h-5 w-5" />
						<span className="text-xl font-semibold">Builder</span>
					</Link>

					{/* Desktop Menu */}
					<NavMenu className="hidden md:block" />

					<div className="flex items-center gap-3">
						<ThemeToggle />

						<Button
							variant="default"
							className="hidden sm:inline-flex rounded-full cursor-pointer"
						>
							Sign In
						</Button>

						{/* Mobile Menu */}
						<div className="md:hidden">
							<NavigationSheet />
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavbarBuilder;
