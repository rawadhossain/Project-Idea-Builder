"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { DisplaySkills } from "./displaySkills";
import { toast } from "sonner";
import axios from "axios";
import { DisplayInterest } from "./displayInterest";

const formSchema = z.object({
	skills: z.string().min(1, "Enter a skill").optional(),
	interests: z.string().min(1, "Enter an interest").optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function GenerateIdea() {
	const [skills, setSkills] = useState<string[]>([]);
	const [interests, setInterests] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			skills: "",
			interests: "",
		},
	});

	const addSkill = () => {
		const skill = form.getValues("skills")?.trim();
		if (skill && !skills.includes(skill)) {
			setSkills([...skills, skill]);
			form.setValue("skills", "");
		}
	};

	const addInterest = () => {
		const interest = form.getValues("interests")?.trim();
		if (interest && !interests.includes(interest)) {
			setInterests([...interests, interest]);
			form.setValue("interests", "");
		}
	};

	const onSubmit = async () => {
		if (skills.length === 0 || interests.length === 0) {
			toast.error("Please add at least one skill and one interest");
			return;
		}

		setLoading(true);
		try {
			const { data } = await axios.post("/api/generate", {
				skills,
				interests,
			});

			toast.success("Ideas generated successfully!");
			router.refresh();
			// router.push("/dashboard"); // or navigate to the first idea using data.ideas[0].publicId
		} catch (error: any) {
			console.error("API Error:", error);
			const message =
				error.response?.data?.error || "Error generating ideas. Please try again.";
			toast.error(message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="container mx-auto px-4 py-10 max-w-2xl">
			{/* Headline */}
			<div className="text-center mb-10">
				<h1 className="text-3xl font-bold tracking-tight text-foreground">
					Tell us what you know and what excites you!
				</h1>
				<p className="text-muted-foreground mt-2">
					Add the skills you have and your preferred fields of interest — we’ll craft an
					idea just for you.
				</p>
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-16">
					{/* Skills Section */}
					<FormField
						control={form.control}
						name="skills"
						render={({ field }) => (
							<FormItem className="flex flex-col gap-2">
								<FormControl>
									<div className="flex gap-3">
										<Input
											{...field}
											className="flex-1"
											placeholder="Add your skills (e.g. JavaScript, C++)"
											onKeyDown={(e) => {
												if (e.key === "Enter") {
													e.preventDefault();
													addSkill();
												}
											}}
										/>
										<Button
											type="button"
											onClick={addSkill}
											variant="secondary"
										>
											<Plus />
										</Button>
									</div>
								</FormControl>

								<DisplaySkills
									skills={skills}
									onRemove={(skill) =>
										setSkills(skills.filter((s) => s !== skill))
									}
								/>
							</FormItem>
						)}
					/>

					{/* Interests Section */}
					<FormField
						control={form.control}
						name="interests"
						render={({ field }) => (
							<FormItem className="flex flex-col gap-2">
								<FormControl>
									<div className="flex gap-3">
										<Input
											value={form.getValues("interests") || ""}
											onChange={(e) =>
												form.setValue("interests", e.target.value)
											}
											className="flex-1 rounded-md"
											placeholder="Add your interests (e.g. AI, Web Dev)"
											onKeyDown={(e) => {
												if (e.key === "Enter") {
													e.preventDefault();
													addInterest();
												}
											}}
										/>
										<Button
											type="button"
											onClick={addInterest}
											variant="secondary"
										>
											<Plus />
										</Button>
									</div>
								</FormControl>

								<DisplayInterest
									interests={interests}
									onRemove={(interest) =>
										setInterests(interests.filter((i) => i !== interest))
									}
								/>
							</FormItem>
						)}
					/>

					{/* Generate Button */}
					<div className="flex justify-center pt-4">
						<Button
							type="submit"
							disabled={loading}
							className="cursor-pointer rounded-full px-6 py-2"
						>
							{loading ? (
								<span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
							) : (
								<Sparkles className="mr-2 h-4 w-4" />
							)}
							Generate Idea
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
