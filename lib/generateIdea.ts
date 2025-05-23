import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
	throw new Error("Gemini API key is not set in environment variables.");
}

const google = createGoogleGenerativeAI({
	apiKey: GEMINI_API_KEY,
});

export type ProjectIdea = {
	name: string;
	problem: string;
	solution: string;
	thinking_process?: string;
	technical_approach?: string;
	tools_required?: string[];
	potential_challenges?: string;
	future_extensions?: string;
};

type GenerateInput = {
	skills: string[];
	interests: string[];
};

export async function generateProjectIdea({
	skills,
	interests,
}: GenerateInput): Promise<ProjectIdea[]> {
	const prompt = `
Generate 3-5 innovative project ideas combining these skills and interests. For each idea, provide:  

**Skills:** ${skills.join(", ")}  
**Interests:** ${interests.join(", ")}  

### **Project Requirements:**  
1. **Depth** – Explain the core problem it solves and why it’s valuable.  
2. **Approach** – Describe the high-level technical/logical approach (no code yet).  
3. **Feasibility** – Mention key tools/libraries and potential hurdles.  
4. **Scalability** – Could it grow into a larger project or business?  

### **Output Format (JSON-Compatible):**  
For each idea, include:  
- **name**: Catchy and descriptive title  
- **problem**: The specific gap or pain point it addresses  
- **solution**: How it solves the problem (1-2 sentences)  
- **thinking_process**: Your reasoning for choosing this idea (market need, personal fit, etc.)  
- **technical_approach**: Key components/steps (e.g., "Use X API for Y, then train a model for Z")  
- **tools_required**: Frameworks, APIs, or languages needed  
- **potential_challenges**: What might be tricky? (e.g., data scarcity, real-time processing)  
- **future_extensions**: How could it evolve?  

### **Example:**  
{
  "name": "PostureGuard: Real-Time Ergonomics Coach",  
  "problem": "Remote workers often develop poor posture without feedback, leading to chronic pain.",  
  "solution": "A webcam-based app that alerts users when their posture deviates from an ergonomic ideal.",  
  "thinking_process": "Combines computer vision accessibility with health tech trends. Targets WFH professionals—a growing market.",  
  "technical_approach": "1. Use MediaPipe Pose Detection to track spine alignment. 2. Train a lightweight model to classify 'good' vs. 'bad' posture. 3. Send real-time alerts via a Flask backend.",  
  "tools_required": ["Python", "MediaPipe", "TensorFlow Lite", "Flask"],  
  "potential_challenges": "Lighting conditions may affect pose detection accuracy.",  
  "future_extensions": "Add weekly analytics or integrate with Slack/Teams."  
}  

Generate 3-5 ideas in this exact format. Prioritize originality and feasibility.  
Format your response as a JSON array (no markdown, no backticks). Only return the array.
`;

	const result = await generateText({
		model: google("gemini-1.5-pro-latest"),
		providerOptions: {
			google: {
				responseModalities: ["TEXT"],
			},
		},
		prompt,
	});

	try {
		const raw = result.text.trim();

		// Attempt to parse, after cleaning unwanted wrapping like markdown code blocks
		const clean = raw.replace(/^```json|```$/g, "").trim();
		const ideas = JSON.parse(clean);

		if (!Array.isArray(ideas)) {
			throw new Error("Generated response is not an array.");
		}

		return ideas;
	} catch (error) {
		console.error("Failed to parse AI response:", error);
		throw new Error("AI response could not be parsed as valid JSON.");
	}
}
