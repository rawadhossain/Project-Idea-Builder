import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export const NavMenu = (props: NavigationMenuProps) => (
	<NavigationMenu {...props}>
		<NavigationMenuList className="gap-12 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
			<NavigationMenuItem>
				<NavigationMenuLink asChild>
					<Link href="/builder" className="font-bold">
						Home
					</Link>
				</NavigationMenuLink>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink asChild>
					<Link href="/favorites" className="font-bold">
						Favorites
					</Link>
				</NavigationMenuLink>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink asChild>
					<Link href="/recent" className="font-bold">
						Recent Ideas
					</Link>
				</NavigationMenuLink>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenu>
);
