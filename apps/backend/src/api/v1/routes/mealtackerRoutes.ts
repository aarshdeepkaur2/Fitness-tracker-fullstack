import { Router } from "express";
import { getMeals, addMeal, deleteMeal } from "../controllers/mealtrackerControllers";

const router = Router();

router.get("/", getMeals);
router.post("/", addMeal);
router.delete("/:id", deleteMeal);

export default router;
