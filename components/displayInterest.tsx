"use client";

import { X } from "lucide-react";

interface DisplayInterestProps {
	interests: string[];
	onRemove?: (interest: string) => void;
}

export const DisplayInterest: React.FC<DisplayInterestProps> = ({ interests, onRemove }) => {
	if (interests.length === 0) return null;

	return (
		<div className="flex flex-wrap gap-3 mt-2">
			{interests.map((interest) => (
				<div
					key={interest}
					className="group relative flex items-center text-sm font-medium text-foreground border border-border shadow-sm bg-muted py-1 px-4 rounded-full transition-all duration-300"
				>
					{/* Cross button: Initially hidden, grows space on hover */}
					<div
						className={`
							absolute left-0 flex items-center justify-center h-full w-0 
							overflow-hidden group-hover:w-6 transition-all duration-300
						`}
					>
						<button
							type="button"
							onClick={() => onRemove?.(interest)}
							className="text-muted-foreground hover:text-destructive"
						>
							<X className="h-4 w-4" />
						</button>
					</div>

					{/* Push the skill text right when icon appears */}
					<span className="transition-all duration-300 pl-1 group-hover:pl-2">
						{interest}
					</span>
				</div>
			))}
		</div>
	);
};
