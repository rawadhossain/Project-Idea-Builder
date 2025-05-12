import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import React from "react";
import GenerateIdea from "@/components/GenerateIdea";

const builderPage = () => {
	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-start pt-20 pb-2">
			<ResizablePanelGroup
				direction="horizontal"
				className="flex-grow w-full max-w-screen-xl rounded-lg border md:min-w-[450px] mx-auto"
			>
				<ResizablePanel defaultSize={27} minSize={25}>
					<GenerateIdea />
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel defaultSize={73} minSize={60}>
					<div className="flex h-full items-center justify-center p-6">
						<span className="font-semibold">Content</span>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	);
};

export default builderPage;
