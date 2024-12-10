import { PrismaClient } from "@prisma/client";

declare global {
  let cachedPrisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const prismaClient = prisma;

prisma.$on("query", (e) => {
  console.error("Erro Prisma:", e.query, e.params);
});
