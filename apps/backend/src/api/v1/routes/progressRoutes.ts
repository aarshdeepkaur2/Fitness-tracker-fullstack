import { Router } from "express";
import  prisma  from "../../../../prisma/client";


const router = Router();

// GET all progress items
router.get("/", async (_req, res) => {
  try {
    const progress = await prisma.progress.findMany({
      orderBy: { id: "asc" }
    });
    res.json(progress);
  } catch (error) {
    console.log("GET error:", error);
    res.status(500).json({ error: "Failed to fetch progress items" });
  }
});

//  POST create new progress goal (FIXED)
router.post("/", async (req, res) => {
  try {
    const { goal } = req.body;

    if (!goal || goal.trim() === "") {
      return res.status(400).json({ error: "Goal cannot be empty" });
    }

    //  Prisma automatically fills:
    // - date (now())
    // - status (NOT_STARTED)
    // So we DO NOT send them.

    const newEntry = await prisma.progress.create({
      data: {
        goal: goal.trim()
      },
    });

    res.json(newEntry);
  } catch (error) {
    console.log("POST error:", error);
    res.status(500).json({ error: "Failed to create progress entry" });
  }
});

//  PUT update status
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await prisma.progress.update({
      where: { id: Number(id) },
      data: { status },
    });

    res.json(updated);
  } catch (error) {
    console.log("PUT error:", error);
    res.status(500).json({ error: "Failed to update progress entry" });
  }
});

//  DELETE remove goal
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.progress.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    console.log("DELETE error:", error);
    res.status(500).json({ error: "Failed to delete progress entry" });
  }
});

export default router;
