
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export { prisma }; // Pastikan export-nya seperti ini (huruf kecil)