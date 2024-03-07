import {
	GlowingStarsBackgroundCard,
	GlowingStarsDescription,
	GlowingStarsTitle,
} from "@/components/ui/glowing-stars";

interface Props {
    title: string
    description: string
}

export default function GlowingStarsBackgroundCardPreview({title, description}: Props) {
	return (
		<div className="flex py-20 items-center justify-center antialiased w-full ">
			<GlowingStarsBackgroundCard>
				<GlowingStarsTitle>{title}</GlowingStarsTitle>
				<div className="flex justify-between items-end">
					<GlowingStarsDescription>
						{description}
					</GlowingStarsDescription>
				</div>
			</GlowingStarsBackgroundCard>
		</div>
	);
}
