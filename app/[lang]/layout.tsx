import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header className="w-full flex items-center justify-between py-8 px-10" >
					<div className="flex items-center gap-5" >
						<img
							src=""
							alt=""
							className="w-[22px] h-[22px] object-contain bg-white"
						/>
						<span>Dotlabs.uz</span>
					</div>
					<nav className="flex items-center gap-5 " >
						<Link href="/Home" className="">
							Home
						</Link>
						<Link href="/Home">About us</Link>
						<Link href="/Home">Portfolio</Link>
						<Link href="/Home">Service</Link>
						<Link href="/Home">Contacts</Link>
					</nav>
					<div>
						<button className="bg-main py-2 px-4 rounded-xl flex items-center gap-2" >
							Let's talk 
							<img 
								src="/icons/pen.svg" 
								alt="pen" 
								className="w-[20px] h-[20px]"
							/>
						</button>
					</div>
				</header>
				{children}
			</body>
		</html>
	);
}
