import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";

export async function POST(req: Request) {
  const body = await req.json();
  const { siteName, adminEmail, password, dbUrl } = body;

  const envPath = path.join(process.cwd(), ".env");
  if (fs.existsSync(envPath)) {
    return NextResponse.json({ success: false, message: "Already installed" }, { status: 400 });
  }

  const env = `DATABASE_URL="${dbUrl}"
SITE_NAME="${siteName}"
ADMIN_EMAIL="${adminEmail}"
JWT_SECRET="${process.env.JWT_SECRET || "change_me_now"}"
`;

  fs.writeFileSync(envPath, env);

  const hashed = await hashPassword(password);
  await prisma.user.create({
    data: { email: adminEmail, password: hashed, role: "ADMIN" },
  });

  return NextResponse.json({ success: true });
}
