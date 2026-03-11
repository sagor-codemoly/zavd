"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ImageComponent } from "../common/image-component";
import type { IIntegrationSection } from "@/models/home-page.model";

interface IntegrationSectionProps {
	data?: IIntegrationSection;
}

const DEFAULTS = {
	heading: "Integration",
	quote: "Make a difference together and pave the way to German society together!",
	description:
		"This is a central document for the integration of the Assyrian diaspora into the majority society in Germany. The integration commissioner is the central point of contact for all integration matters of refugees in German society. This makes an extraordinarily ambitious activity. They lay the foundations for effectively integrating 400 to 600 newly-arrived participants annually, which makes the often difficult and many cases overwhelming journey to integration much more attainable and helps the whole community grow stronger together.",
	readMoreLink: "/themen/integration",
};

export function IntegrationSection({ data }: IntegrationSectionProps) {
	const heading = data?.heading || DEFAULTS.heading;
	const quote = data?.quote || DEFAULTS.quote;
	const description = data?.description || DEFAULTS.description;
	const readMoreLink = data?.readMoreLink || DEFAULTS.readMoreLink;
	const image = data?.image;
	const partnerLogos = data?.partnerLogos || [];

	return (
		<section className="w-full bg-white pt-8 pb-16 lg:pb-24 overflow-visible relative z-10">
			<div className="_container">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-stretch">
					{/* Left: Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="flex flex-col gap-6"
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-secondary font-heading">
							{heading}
						</h2>

						<p className="text-base lg:text-lg font-semibold text-foreground/80 leading-relaxed">
							{quote}
						</p>

						<p className="text-sm lg:text-base text-foreground/70 leading-relaxed">
							{description}
						</p>

						{readMoreLink && (
							<div className="pt-2">
								<Link
									href={readMoreLink}
									className="inline-flex items-center text-primary font-semibold hover:underline text-sm lg:text-base"
								>
									Read more…
								</Link>
							</div>
						)}

						{/* Partner Logos */}
						{partnerLogos.length > 0 && (
							<div className="flex flex-wrap gap-8 items-center pt-4">
								{partnerLogos.map((partner, index) => (
									<a
										key={index}
										href={partner.href || "#"}
										target="_blank"
										rel="noopener noreferrer"
										className="flex flex-col items-center gap-2 group"
									>
										{partner.image && (
											<div className="w-24 h-16 relative flex items-center justify-center">
												<ImageComponent
													src={partner.image}
													alt={partner.name || "Partner logo"}
													height={64}
													width={96}
													className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
												/>
											</div>
										)}
										{partner.name && (
											<span className="text-xs text-foreground/50 text-center max-w-[100px] leading-tight">
												{partner.name}
											</span>
										)}
									</a>
								))}
							</div>
						)}
					</motion.div>

					{/* Right: Image */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="self-stretch flex mt-[-80px] lg:mt-[-120px]"
					>
						{image ? (
							<div className="relative w-full rounded-lg overflow-hidden shadow-lg">
								<ImageComponent
									src={image}
									alt={heading}
									fill
									className="object-cover object-center"
									showLoader={false}
								/>
							</div>
						) : (
							<div className="relative w-full max-w-sm flex items-center justify-center p-8">
								<div className="w-40 h-40 rounded-full bg-secondary/10 flex items-center justify-center">
									<div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
										<span className="text-4xl font-bold text-primary">Z</span>
									</div>
								</div>
							</div>
						)}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
