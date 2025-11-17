import { Request, Response } from "express";
import mealService from "../services/mealtrackerServices";

export const getMeals = async (_req: Request, res: Response) => {
  const meals = await mealService.getMeals();
  res.json(meals);
};

export const addMeal = async (req: Request, res: Response) => {
  const { name, calories } = req.body;
  if (!name || calories <= 0)
    return res.status(400).json({ error: "Invalid meal data" });

  const meal = await mealService.addMeal({ name, calories });
  res.status(201).json(meal);
};

export const deleteMeal = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await mealService.deleteMeal(id);
  res.status(204).send();
};
