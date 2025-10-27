import type { Meal } from "../types/Meal";
import { testMeals } from "../testdata/meals";


export const mealRepository = {
  getAllMeals(): Meal[] {
    return testMeals;
  },

  addMeal(meal: Meal): void {
    testMeals.push(meal);
  },

  deleteMeal(id: number): void {
    const index = testMeals.findIndex((m) => m.id === id);
    if (index !== -1) {
      testMeals.splice(index, 1); 
    }
  },
};
