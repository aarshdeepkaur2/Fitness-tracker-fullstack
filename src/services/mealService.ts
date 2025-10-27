import type { Meal } from "../types/Meal";
import { mealRepository } from "../repositories/mealRepository";


export const mealService = {
  getMeals: () => {
    return mealRepository.getAllMeals().sort((a, b) => b.calories - a.calories);
  },

  addMeal: (meal: Meal) => {
    if (!meal.name || meal.calories <= 0) {
      throw new Error("Invalid meal data");
    }
    mealRepository.addMeal(meal);
  },

  deleteMeal: (id: number) => {
    mealRepository.deleteMeal(id);
  },
};
