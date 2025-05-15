export function DisplayInterest({ interests }: any) {
	return (
		<div className="max-w-lg mx-auto mt-6 bg-white p-4 rounded-md shadow-md">
			<ul className="list-disc pl-5 space-y-1">{interests}</ul>
		</div>
	);
}
