import { execSync } from "child_process";
import fs from "fs";
import path from "path";

export function ensurePrismaClient() {
  try {
    const clientPath = path.resolve("node_modules/.prisma/client/index.js");

    // ✅ Vérifie si Prisma client existe déjà
    if (fs.existsSync(clientPath)) {
      console.log("✅ Prisma client ready.");
      return true;
    }

    console.log("⚡ Generating Prisma client...");
    execSync("npx prisma generate", { stdio: "inherit" });
    console.log("✅ Prisma client generated successfully!");
    return true;
  } catch (err: any) {
    console.error("❌ Prisma client generation failed:", err.message);
    return false;
  }
}
