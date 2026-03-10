"use client";

import { useTranslations } from "next-intl";
import { Phone, Clock } from "lucide-react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { useNavbarVariant } from "@/lib/context/navbar-variant-context";
import { cn } from "@/lib/utils";

interface TopBarProps {
	facebookUrl?: string;
	youtubeUrl?: string;
}

export function TopBar({ facebookUrl, youtubeUrl }: TopBarProps) {
	const t = useTranslations("topBar");
	const { variant } = useNavbarVariant();
	const isDarkHero = variant === "dark-hero";

	const textColor = isDarkHero ? "text-white/80" : "text-secondary/80";
	const hoverColor = isDarkHero ? "hover:text-white" : "hover:text-secondary";
	const iconColor = isDarkHero ? "text-white/50" : "text-secondary/40";

	return (
		<div className="w-full transition-colors duration-300">
			<div className="_container">
				<div className={cn("flex items-center justify-between h-10 text-xs transition-colors duration-300", textColor)}>
					{/* Left: Phone + Hours */}
					<div className="flex items-center gap-4">
						<a
							href={`tel:${t("phone").replace(/\s/g, "")}`}
							className={cn("flex items-center gap-1.5 transition-colors", hoverColor)}
						>
							<Phone className="h-3 w-3 text-primary shrink-0" />
							<span>{t("phone")}</span>
						</a>
						<div className="flex items-center gap-1.5">
							<Clock className="h-3 w-3 text-primary shrink-0" />
							<span>{t("hours")}</span>
						</div>
					</div>

					{/* Right: Social Icons */}
					<div className="flex items-center gap-3">
						{facebookUrl ? (
							<a
								href={facebookUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={cn("transition-colors", hoverColor)}
								aria-label="Facebook"
							>
								<FaFacebookF className="h-3.5 w-3.5" />
							</a>
						) : (
							<span className={cn("cursor-default", iconColor)} aria-hidden>
								<FaFacebookF className="h-3.5 w-3.5" />
							</span>
						)}
						{youtubeUrl ? (
							<a
								href={youtubeUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={cn("transition-colors", hoverColor)}
								aria-label="YouTube"
							>
								<FaYoutube className="h-3.5 w-3.5" />
							</a>
						) : (
							<span className={cn("cursor-default", iconColor)} aria-hidden>
								<FaYoutube className="h-3.5 w-3.5" />
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
