"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
			skills: [],
			interests: [],
		},
	});

	const onSubmit = async (data: FormValues) => {
		setLoading(true);
		const response = await fetch("/api/idea", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const idea = await response.json();
		setLoading(false);
		router.push(`/idea/${idea.id}`);
	};

	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
					{/* Skills */}
					<FormField
						control={form.control}
						name="skills"
						render={({ field }) => (
							<FormItem className="col-span-4 flex flex-col gap-2">
								<FormControl>
									<div className="flex gap-1">
										<Input
											{...field}
											className="col-span-3"
											placeholder="Add your skills"
										/>
										<Button type="submit">
											<Plus className="mr-2 h-5 w-5" />
										</Button>
									</div>
								</FormControl>
								<FormMessage className="col-start-2 col-span-3" />
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
									<div className="flex gap-1">
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
								<FormMessage className="col-start-2 col-span-3" />
							</FormItem>
						)}
					/>
				</form>
			</Form>
		</div>
	);
}
