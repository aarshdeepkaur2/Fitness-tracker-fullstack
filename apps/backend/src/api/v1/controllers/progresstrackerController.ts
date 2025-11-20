import { Request, Response } from "express";
import { progressService } from "../services/progressService";

export const progressController = {

  // GET all
  async getAll(req: Request, res: Response) {
    try {
      const items = await progressService.getAll();
      res.json(items);
    } catch (error) {
      console.log("GET error:", error);
      res.status(500).json({ message: "Failed to fetch progress" });
    }
  },

  // POST new goal
  async create(req: Request, res: Response) {
    try {
      const { goal } = req.body;

      if (!goal || goal.trim() === "") {
        return res.status(400).json({ message: "Goal cannot be empty" });
      }

      const item = await progressService.create(goal.trim());
      res.json(item);
    } catch (error) {
      console.log("POST error:", error);
      res.status(500).json({ message: "Failed to create goal" });
    }
  },

  // PUT update
  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { status } = req.body;

      const item = await progressService.updateStatus(id, status);
      res.json(item);
    } catch (error) {
      console.log("PUT error:", error);
      res.status(500).json({ message: "Failed to update goal" });
    }
  },

  // DELETE
  async remove(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      await progressService.delete(id);

      res.json({ message: "Deleted successfully" });
    } catch (error) {
      console.log("DELETE error:", error);
      res.status(500).json({ message: "Failed to delete goal" });
    }
  }
};