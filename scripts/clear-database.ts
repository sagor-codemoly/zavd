/**
 * Clear Database Script
 * Removes all existing Synos/cheese data from all collections
 * ZAVD NGO project - fresh start
 * Run with: npx tsx scripts/clear-database.ts
 */

import mongoose from "mongoose";
import * as fs from "fs";
import * as path from "path";

function loadEnvFile() {
	const envFiles = [".env.local", ".env"];
	for (const envFile of envFiles) {
		const envPath = path.resolve(process.cwd(), envFile);
		if (fs.existsSync(envPath)) {
			const content = fs.readFileSync(envPath, "utf-8");
			for (const line of content.split("\n")) {
				const trimmed = line.trim();
				if (!trimmed || trimmed.startsWith("#")) continue;
				const eqIndex = trimmed.indexOf("=");
				if (eqIndex === -1) continue;
				const key = trimmed.slice(0, eqIndex).trim();
				let value = trimmed.slice(eqIndex + 1).trim();
				if (
					(value.startsWith('"') && value.endsWith('"')) ||
					(value.startsWith("'") && value.endsWith("'"))
				) {
					value = value.slice(1, -1);
				}
				if (!process.env[key]) process.env[key] = value;
			}
			break;
		}
	}
}

loadEnvFile();

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
	console.error("MONGODB_URI is not defined");
	process.exit(1);
}

const COLLECTIONS_TO_CLEAR = [
	"home_page",
	"about_page",
	"products",
	"categories",
	"site_settings",
	"blog_posts",
	"blog_categories",
	"faq_page",
	"kontakt_page",
	"legal_page",
	"privacy_page",
	"team_page",
	"form_submissions",
	"reseller_page",
	"store_page",
	"training_page",
	"starta_eget_page",
	"careers_page",
	"kopguide_page",
	"miniutbildning_page",
	"varfor_valja_synos_page",
	"varfor_valja_zavd_page",
	"session",
	"account",
	"profile",
	"profiles",
];

async function main() {
	console.log("Connecting to MongoDB...");
	await mongoose.connect(MONGODB_URI!);
	console.log("Connected!\n");

	const db = mongoose.connection.db!;

	// List actual collections
	const existing = await db.listCollections().toArray();
	const existingNames = existing.map((c) => c.name);

	console.log("=== Clearing all collections ===");
	for (const col of existingNames) {
		const count = await db.collection(col).countDocuments();
		await db.collection(col).deleteMany({});
		console.log(`✓ ${col}: deleted ${count} documents`);
	}

	console.log("\n=== Verification ===");
	for (const col of existingNames) {
		const count = await db.collection(col).countDocuments();
		console.log(`${col}: ${count} documents`);
	}

	console.log("\nDatabase cleared successfully!");
	await mongoose.disconnect();
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
