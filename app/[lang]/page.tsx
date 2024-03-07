import GlowingStarsBackgroundCardPreview from "@/components/StarsCard";
import { MeteorsDemo } from "@/components/TeamCard";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import axios from "axios";

export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	const translation = await getDictionary(lang);
	const projects = await axios.get(
		process.env.NEXT_PUBLIC_TOKEN + "/portfolios"
	);

	console.log({ projects });

	return (
		<>
			<section className="relative" >
				<WavyBackground className="max-w-4xl w-full mx-auto pb-40">
					<p
						className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center"
						dangerouslySetInnerHTML={{
							__html: translation.hero.main,
						}}
					/>
					<p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
						{translation.hero.small_title}
					</p>
				</WavyBackground>
			</section>
			<center>
				<p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-[#070F2B] py-8">
					What we do
				</p>
			</center>
			<div className="flex items-center justify-between gap-10 mx-auto my-0 w-[80%]">
				<GlowingStarsBackgroundCardPreview
					title="Websites"
					description="Our experienced designers and developers will create for you a modern, functional and creative website that stands out from the competition."
				/>
				<GlowingStarsBackgroundCardPreview
					title="iOS/Android"
					description="Our application development team will create a mobile or web application that will increase the efficiency of your business and improve customer interaction."
				/>
				<GlowingStarsBackgroundCardPreview
					title="CRM systems"
					description="Our CRM systems will help you effectively manage customers, improve sales and optimize business processes."
				/>
			</div>
			<section className="flex items-start justify-between flex-col md:flex-row gap-6 w-full md:w-[90%] max-w-[1400px] mx-auto relative px-5 my-[60px] md:my-[120px]">
				<div className="flex flex-col items-start gap-4 w-full">
					{/* <Image
						src="/icons/logo_text.svg"
						alt=""
						width="100"
						height="50"
					/> */}
					<h2 className="text-3xl  md:text-[44px] leading-[39px] md:leading-[53px] md:uppercase font-bold">
						YOUR RELIABLE PARTNER IN{" "}
						<span className="relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-[#070F2B]">
							SOFTWARE DEVELOPMENT
						</span>
					</h2>
					<p className="font-normal md:text-lg text-[#747474]">
						At Dot Labs, we are passionately dedicated to creating
						outstanding web solutions that take your business to the
						next level. With our expertise in the development of
						websites, mobile applications and CRM systems, we strive
						to be your reliable technology partner.
					</p>
				</div>
				<div className="w-full h-full">
					<MeteorsDemo />
				</div>
			</section>
			<HeroParallax
				products={projects?.data?.data}
				translation={translation}
			/>
		</>
	);
}
