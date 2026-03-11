"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageComponent } from "../common/image-component";
import type { ITestimonialsSection } from "@/models/home-page.model";

interface TestimonialsProps {
	data: ITestimonialsSection;
}

export function Testimonials({ data }: TestimonialsProps) {
	const items = (data?.testimonials ?? []).filter(
		(t) => t.description || t.title
	);

	const [active, setActive] = useState(0);

	if (items.length === 0) return null;

	const prev = () => setActive((i) => (i - 1 + items.length) % items.length);
	const next = () => setActive((i) => (i + 1) % items.length);

	const current = items[active];

	return (
		<section className="w-full bg-white py-16 lg:py-24">
			<div className="_container">
				{/* Section heading */}
				{(data?.title || data?.subtitle) && (
					<div className="flex items-center justify-center gap-3 mb-12">
						<span className="w-8 h-px bg-primary block" />
						<span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">
							{data.title || "Testimonials"}
						</span>
						<span className="w-8 h-px bg-primary block" />
					</div>
				)}

				<div className="max-w-3xl mx-auto flex flex-col items-center">
					{/* Profile image — circular */}
					<AnimatePresence mode="wait">
						<motion.div
							key={active + "-img"}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.3 }}
							className="mb-5"
						>
							{current.image ? (
								<div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-border/40 shadow-sm">
									<ImageComponent
										src={current.image}
										alt={current.title || "Testimonial"}
										fill
										className="object-cover"
									/>
								</div>
							) : (
								<div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-border flex items-center justify-center">
									<span className="text-2xl font-bold text-primary/40">
										{current.title?.charAt(0) || "?"}
									</span>
								</div>
							)}
						</motion.div>
					</AnimatePresence>

					{/* Name — "- Name -" style */}
					<AnimatePresence mode="wait">
						<motion.div
							key={active + "-name"}
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -8 }}
							transition={{ duration: 0.3 }}
							className="text-center mb-1"
						>
							{current.title && (
								<p className="text-sm font-semibold text-secondary tracking-wide">
									- {current.title} -
								</p>
							)}
							{current.subtitle && (
								<p className="text-xs text-foreground/45 mt-0.5">
									{current.subtitle}
								</p>
							)}
						</motion.div>
					</AnimatePresence>

					{/* Quote text */}
					<AnimatePresence mode="wait">
						<motion.div
							key={active + "-quote"}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -16 }}
							transition={{ duration: 0.4, delay: 0.05 }}
							className="mt-8 text-center"
						>
							{current.description && (
								<p className="text-lg md:text-xl font-medium text-secondary leading-relaxed">
									&quot;{current.description}&quot;
								</p>
							)}
						</motion.div>
					</AnimatePresence>

					{/* Navigation arrows */}
					{items.length > 1 && (
						<div className="flex items-center gap-3 mt-10">
							<button
								onClick={prev}
								aria-label="Previous"
								className="w-11 h-11 rounded-full border border-primary/40 flex items-center justify-center text-primary/60 hover:border-primary hover:text-primary transition-all duration-200"
							>
								<ChevronLeft className="w-5 h-5" />
							</button>
							<button
								onClick={next}
								aria-label="Next"
								className="w-11 h-11 rounded-full border border-primary/40 flex items-center justify-center text-primary/60 hover:border-primary hover:text-primary transition-all duration-200"
							>
								<ChevronRight className="w-5 h-5" />
							</button>
						</div>
					)}

					{/* Dot indicators */}
					{items.length > 1 && (
						<div className="flex gap-2 mt-4">
							{items.map((_, i) => (
								<button
									key={i}
									onClick={() => setActive(i)}
									className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
										i === active
											? "bg-primary w-4"
											: "bg-foreground/20"
									}`}
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
