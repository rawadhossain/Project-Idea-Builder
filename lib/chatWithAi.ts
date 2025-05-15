import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
	throw new Error("Gemini API key is not set in environment variables.");
}

const google = createGoogleGenerativeAI({
	apiKey: GEMINI_API_KEY,
});

export type ChatMessage = {
	role: "user" | "assistant";
	content: string;
};

export async function chatWithGemini(messages: ChatMessage[]): Promise<string> {
	try {
		const result = await generateText({
			model: google("gemini-1.5-pro-latest"),
			providerOptions: {
				google: {
					responseModalities: ["TEXT"],
				},
			},
			messages: messages.map((msg) => ({
				role: msg.role,
				content: msg.content,
			})),
		});

		const response = result.text.trim();
		return response;
	} catch (error) {
		console.error("Gemini chat error:", error);
		throw new Error("Failed to get response from Gemini.");
	}
}
