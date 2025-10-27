import { useState } from "react";
import type { Meal } from "../types/Meal";
import { mealService } from "../services/mealService";

export const useMeals = () => {
  const [meals, setMeals] = useState<Meal[]>(mealService.getMeals());

  const addMeal = (meal: Meal) => {
    mealService.addMeal(meal);
    setMeals(mealService.getMeals());
  };

  return { meals, addMeal };
};
