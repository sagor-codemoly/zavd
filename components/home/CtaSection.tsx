"use client";

import { Phone, Mail, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { ICtaSection } from "@/models/home-page.model";

interface CtaSectionProps {
	data: ICtaSection;
	phone: string;
	email: string;
}

const CtaSection = ({ data, phone, email }: CtaSectionProps) => {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 lg:py-28">
			{/* Decorative background elements */}
			<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
			<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

			<div className="_container relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

					{/* Left: Text + Contact Info */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="flex flex-col gap-8"
					>
						{/* Tag */}
						<div className="flex items-center gap-3">
							<span className="w-8 h-px bg-primary block" />
							<span className="text-primary text-sm font-semibold tracking-widest uppercase">
								Contact
							</span>
						</div>

						{/* Heading */}
						<div>
							<h2 className="text-4xl lg:text-5xl font-bold text-secondary font-heading leading-tight mb-4">
								{data.title || "Get in Touch With Us"}
							</h2>
							<p className="text-foreground/60 text-lg leading-relaxed">
								{data.subtitle || "We're here to help. Reach out to us anytime."}
							</p>
						</div>

						{/* Contact Cards */}
						<div className="flex flex-col gap-4">
							{phone && (
								<a
									href={`tel:${phone}`}
									className="group flex items-center gap-5 p-5 bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
								>
									<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
										<Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
									</div>
									<div>
										<p className="text-xs text-foreground/50 uppercase tracking-widest font-medium mb-0.5">
											{data.phoneTitle || "Call Us"}
										</p>
										<p className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
											{phone}
										</p>
									</div>
									<ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-primary ml-auto transition-all group-hover:translate-x-1" />
								</a>
							)}

							{email && (
								<a
									href={`mailto:${email}`}
									className="group flex items-center gap-5 p-5 bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
								>
									<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
										<Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
									</div>
									<div>
										<p className="text-xs text-foreground/50 uppercase tracking-widest font-medium mb-0.5">
											{data.emailTitle || "Email Us"}
										</p>
										<p className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
											{email}
										</p>
									</div>
									<ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-primary ml-auto transition-all group-hover:translate-x-1" />
								</a>
							)}
						</div>
					</motion.div>

					{/* Right: CTA Card */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<div className="relative bg-secondary rounded-3xl p-8 lg:p-12 overflow-hidden">
							{/* Card decorative */}
							<div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
							<div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full translate-y-1/2 -translate-x-1/4" />

							<div className="relative z-10 flex flex-col gap-6">
								<div>
									<p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
										{data.formTitle || "Ready to Start?"}
									</p>
									<h3 className="text-3xl lg:text-4xl font-bold text-white font-heading leading-tight">
										{data.title || "Let's Work Together"}
									</h3>
								</div>

								<p className="text-white/60 leading-relaxed">
									{data.formSubtitle || "Fill out the form and we'll get back to you within 24 hours."}
								</p>

								<div className="pt-2">
									<Button
										asChild
										size="lg"
										className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
									>
										<Link href={data.formCtaHref || "/kontakt"}>
											{data.formCtaText || "Send Message"}
											<ArrowRight className="ml-2 h-5 w-5" />
										</Link>
									</Button>
								</div>

								{/* Stats row */}
								<div className="flex items-center gap-6 pt-4 border-t border-white/10">
									<div className="text-center">
										<p className="text-2xl font-bold text-white">24h</p>
										<p className="text-white/50 text-xs">Response time</p>
									</div>
									<div className="w-px h-10 bg-white/10" />
									<div className="text-center">
										<p className="text-2xl font-bold text-white">100%</p>
										<p className="text-white/50 text-xs">Free advice</p>
									</div>
									<div className="w-px h-10 bg-white/10" />
									<div className="text-center">
										<p className="text-2xl font-bold text-white">DE</p>
										<p className="text-white/50 text-xs">Germany wide</p>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
