import { PrismaClient } from "@prisma/client";
import { ensurePrismaClient } from "./ensurePrisma";

ensurePrismaClient();

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query", "error", "warn"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
