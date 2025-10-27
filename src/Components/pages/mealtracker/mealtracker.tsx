import React from "react";
import "./mealtracker.css";
import MealForm from "./MealForm";
import { useMeals } from "../../../hooks/useMeals";

function MealTracker() {
  const { meals, addMeal } = useMeals();

  return (
    <section className="meal-tracker">
      <h2>Daily Meal Tracker</h2>

      <MealForm onAddMeal={addMeal} />

      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <span className="meal-name">{meal.name}</span>
            <span className="meal-calories">{meal.calories} kcal</span>
          </li>
        ))}
      </ul>

      <p className="total">
        Total: {meals.reduce((sum, m) => sum + m.calories, 0)} kcal
      </p>
    </section>
  );
}

export default MealTracker;
