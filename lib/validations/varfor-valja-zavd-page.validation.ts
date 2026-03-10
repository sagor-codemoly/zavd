import { z } from "zod";

// ============================================================================
// SECTION VISIBILITY
// ============================================================================
export const varforValjaZavdSectionVisibilitySchema = z.object({
	hero: z.boolean(),
	reasons: z.boolean(),
	benefits: z.boolean(),
	cta: z.boolean(),
	contactForm: z.boolean(),
	richContent: z.boolean().default(false),
});

// ============================================================================
// HERO SECTION
// ============================================================================
export const varforValjaZavdHeroSectionSchema = z.object({
	badge: z.string().max(100).optional(),
	title: z.string().max(200).optional(),
	titleHighlight: z.string().max(200).optional(),
	subtitle: z.string().max(1000).optional(),
});

// ============================================================================
// REASON CARD
// ============================================================================
export const varforValjaZavdReasonCardSchema = z.object({
	icon: z.string().max(50).optional(),
	title: z.string().max(200).optional(),
	description: z.string().max(500).optional(),
});

// ============================================================================
// BENEFITS SECTION
// ============================================================================
export const varforValjaZavdBenefitsSectionSchema = z.object({
	title: z.string().max(200).optional(),
	subtitle: z.string().max(500).optional(),
	items: z.array(z.string().max(200)).optional(),
});

// ============================================================================
// CTA SECTION
// ============================================================================
export const varforValjaZavdCtaSectionSchema = z.object({
	title: z.string().max(200).optional(),
	subtitle: z.string().max(500).optional(),
	primaryButtonText: z.string().max(100).optional(),
	primaryButtonHref: z.string().max(500).optional(),
	secondaryButtonText: z.string().max(100).optional(),
	secondaryButtonHref: z.string().max(500).optional(),
});

// ============================================================================
// SEO
// ============================================================================
export const varforValjaZavdPageSeoSchema = z.object({
	title: z.string().max(100).optional(),
	description: z.string().max(300).optional(),
	ogImage: z.string().max(500).optional(),
});

// ============================================================================
// UPDATE VARFOR VALJA ZAVD PAGE SCHEMA
// ============================================================================
export const updateVarforValjaZavdPageSchema = z.object({
	sectionVisibility: varforValjaZavdSectionVisibilitySchema.optional(),
	hero: varforValjaZavdHeroSectionSchema.optional(),
	reasons: z.array(varforValjaZavdReasonCardSchema).optional(),
	benefitsSection: varforValjaZavdBenefitsSectionSchema.optional(),
	ctaSection: varforValjaZavdCtaSectionSchema.optional(),
	richContent: z.string().optional(),
	seo: varforValjaZavdPageSeoSchema.optional(),
});

// Type exports
export type VarforValjaZavdSectionVisibilityInput = z.infer<
	typeof varforValjaZavdSectionVisibilitySchema
>;
export type VarforValjaZavdHeroSectionInput = z.infer<
	typeof varforValjaZavdHeroSectionSchema
>;
export type VarforValjaZavdReasonCardInput = z.infer<
	typeof varforValjaZavdReasonCardSchema
>;
export type VarforValjaZavdBenefitsSectionInput = z.infer<
	typeof varforValjaZavdBenefitsSectionSchema
>;
export type VarforValjaZavdCtaSectionInput = z.infer<
	typeof varforValjaZavdCtaSectionSchema
>;
export type VarforValjaZavdPageSeoInput = z.infer<
	typeof varforValjaZavdPageSeoSchema
>;
export type UpdateVarforValjaZavdPageInput = z.infer<
	typeof updateVarforValjaZavdPageSchema
>;
