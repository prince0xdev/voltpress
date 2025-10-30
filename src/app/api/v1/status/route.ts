import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const envPath = path.join(process.cwd(), ".env");
  const installed = fs.existsSync(envPath);
  return NextResponse.json({ installed });
}
