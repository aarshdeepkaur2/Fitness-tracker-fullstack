import { Router } from "express";
import { PrismaClient, Status } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.get("/", async (_req, res) => {
  try {
    const progress = await prisma.progress.findMany({
      orderBy: { id: "asc" }
    });
    res.json(progress);
  } catch (error) {
    console.log("GET /progress ERROR:", error);
    res.status(500).json({ error: "Failed to fetch progress items" });
  }
});


router.post("/", async (req, res) => {
  try {
    const { goal } = req.body;

    if (!goal?.trim()) {
      return res.status(400).json({ error: "Goal cannot be empty" });
    }

    const newEntry = await prisma.progress.create({
      data: { goal: goal.trim() }
    });

    res.json(newEntry);
  } catch {
    res.status(500).json({ error: "Failed to create progress entry" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!Object.values(Status).includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const updated = await prisma.progress.update({
      where: { id: Number(id) },
      data: { status: status as Status }
    });

    res.json(updated);
  } catch {
    res.status(500).json({ error: "Failed to update progress entry" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.progress.delete({
      where: { id: Number(id) }
    });

    res.json({ message: "Deleted successfully" });
  } catch {
    res.status(500).json({ error: "Failed to delete progress entry" });
  }
});

export default router;
