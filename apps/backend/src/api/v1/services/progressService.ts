import { PrismaClient, Status } from "@prisma/client";

const prisma = new PrismaClient();

export class ProgressService {
  async getAll() {
    return await prisma.progress.findMany({
      orderBy: { id: "asc" },
    });
  }

  async create(goal: string) {
    return await prisma.progress.create({
      data: { goal },
    });
  }

  async updateStatus(id: number, status: Status) {
    return await prisma.progress.update({
      where: { id },
      data: { status },
    });
  }

  async delete(id: number) {
    return await prisma.progress.delete({
      where: { id },
    });
  }
}

export const progressService = new ProgressService();
