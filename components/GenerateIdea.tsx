"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { DisplaySkills } from "./displaySkills";
import { DisplayInterest } from "./dsiplayInterests";

const formSchema = z.object({
	skills: z.string().array(),
	interests: z.string().array(),
});

type FormValues = z.infer<typeof formSchema>;

export default function GenerateIdea() {
	const [skills, setSkills] = useState<string[]>([]);
	const [interests, setInterests] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const skillsList = (
		<>
			{skills.map((skill, index) => (
				<li key={index} className="text-gray-800">
					{skill}
				</li>
			))}
		</>
	);

	const interestsList = (
		<>
			{interests.map((interest, index) => (
				<li key={index} className="text-gray-800">
					{interest}
				</li>
			))}
		</>
	);

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			skills: [""],
			interests: [""],
		},
	});

	const onSubmit = async (data: FormValues) => {
		setLoading(true);

		try {
			// Send the form data to the API
			const response = await fetch("/api/idea", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...data,
					isPublic: false, // Default to private; adjust based on user input if needed
				}),
			});

			// Handle the response
			if (!response.ok) {
				throw new Error("Failed to create idea");
			}

			const idea = await response.json();

			// Redirect to the idea page using the publicId
			router.push(`/idea/${idea.publicId}`);
		} catch (error) {
			console.error("Error creating idea:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="container mx-auto px-4 mt-2">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-24 py-4">
					{/* Skills */}
					<FormField
						control={form.control}
						name="skills"
						render={({ field }) => (
							<FormItem className="col-span-4 flex flex-col gap-2">
								<FormControl>
									<div className="flex gap-3">
										<Input
											{...field}
											className="col-span-3"
											placeholder="Add your skills"
										/>
										<Button type="submit">
											<Plus />
										</Button>
									</div>
								</FormControl>
								{/* Display the skills list */}
								<DisplaySkills skills={skillsList} />
							</FormItem>
						)}
					/>

					{/* Interests */}
					<FormField
						control={form.control}
						name="interests"
						render={({ field }) => (
							<FormItem className="col-span-4 flex flex-col gap-2">
								<FormControl>
									<div className="flex gap-3">
										<Input
											{...field}
											className="col-span-3"
											placeholder="Add your field of interests"
										/>
										<Button type="submit">
											<Plus className="mr-2 h-5 w-5" />
										</Button>
									</div>
								</FormControl>
								{/* Display the interests list */}
								<DisplayInterest interests={interestsList} />
							</FormItem>
						)}
					/>

					<div className="flex items-center justify-center">
						<Button
							type="submit"
							disabled={loading}
							className="cursor-pointer rounded-full"
						>
							<Sparkles size={20} />
							Generate Idea
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
