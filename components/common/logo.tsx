import Link from "next/link";
import { ImageComponent } from "./image-component";

interface LogoProps {
	asLink?: boolean;
	className?: string;
	logoUrl?: string;
	companyName?: string;
	textClassName?: string;
}

const Logo = ({
	asLink = true,
	className = "shrink-0",
	logoUrl,
	companyName = "ZAVD",
	textClassName = "text-white",
}: LogoProps) => {
	const content = logoUrl ? (
		<ImageComponent
			src={logoUrl}
			alt={companyName}
			width={0}
			height={0}
			sizes="100vw"
			className="h-14 w-36 sm:h-16 sm:w-44 lg:h-16 lg:w-48 p-2 py-1.5 rounded"
		/>
	) : (
		<div className={`flex items-center gap-2 px-2 ${textClassName}`}>
			{/* ZAVD Star Icon */}
			<svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M20 2L23.5 13.5H35.5L25.8 20.5L29.3 32L20 25L10.7 32L14.2 20.5L4.5 13.5H16.5L20 2Z" fill="#E60000"/>
				<path d="M20 6L22.5 14H31L24.5 18.5L27 26.5L20 22L13 26.5L15.5 18.5L9 14H17.5L20 6Z" fill="#4A90E2" opacity="0.6"/>
			</svg>
			<span className="text-xl sm:text-2xl font-bold tracking-wide">ZAVD</span>
		</div>
	);

	if (!asLink) {
		return <div className={className}>{content}</div>;
	}

	return (
		<Link href="/" className={className}>
			{content}
		</Link>
	);
};

export default Logo;
