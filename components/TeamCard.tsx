import Link from "next/link";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Meteors } from "./ui/meteors";

export function MeteorsDemo() {
	return (
		<div className="">
			<div className="relative h-full">
				<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
				<div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
					<div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-2 w-2 text-gray-300"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
							/>
						</svg>
					</div>

					<h1 className="font-bold text-xl text-white mb-4 relative z-50">
						Specialists with extensive experience
					</h1>

					<div className="flex flex-row items-start justify-start mb-10 w-full">
						<AnimatedTooltip items={people} />
					</div>

					<p className="font-normal text-base text-slate-500 mb-4 relative z-50">
						At DOT LABS, we are passionately dedicated to creating
						outstanding web solutions that take your business to the
						next level.
					</p>

					<Link href="#" className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
						Explore
					</Link>

					{/* Meaty part - Meteor effect */}
					<Meteors number={20} />
				</div>
			</div>
		</div>
	);
}

const people = [
	{
		id: 1,
		name: "John Doe",
		designation: "Software Engineer",
		image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
	},
	{
		id: 2,
		name: "Robert Johnson",
		designation: "Product Manager",
		image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 3,
		name: "Jane Smith",
		designation: "Data Scientist",
		image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 4,
		name: "Emily Davis",
		designation: "UX Designer",
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 5,
		name: "Tyler Durden",
		designation: "Soap Developer",
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
	},
	{
		id: 6,
		name: "Dora",
		designation: "The Explorer",
		image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
	},
];
