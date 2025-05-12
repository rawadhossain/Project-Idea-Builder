import NavbarBuilder from "@/components/navbar-04/navbar-04";
import React from "react";
type Props = {
	children: React.ReactNode;
};
const layout = ({ children }: Props) => {
	return (
		<div>
			<div className="sticky top-0">
				<NavbarBuilder />
			</div>
			{children}
		</div>
	);
};

export default layout;
