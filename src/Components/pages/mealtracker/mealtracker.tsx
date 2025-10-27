import React from "react";
import "./mealtracker.css";
import MealForm from "./MealForm";
import { useMeals } from "../../../hooks/useMeals";


function MealTracker() {
  const { meals, addMeal, deleteMeal } = useMeals();

  return (
    <section className="meal-tracker">
      <h2>Daily Meal Tracker</h2>

      {/* Add Meal Form */}
      <MealForm onAddMeal={addMeal} />

      {/* Meals List */}
      <ul>
        {meals.map((meal) => (
          <li key={meal.id} className="meal-item">
            <span className="meal-name">{meal.name}</span>
            <span className="meal-calories">{meal.calories} kcal</span>

            <button
              className="remove-btn"
              onClick={() => {
                if (window.confirm(`Remove "${meal.name}"?`)) {
                  deleteMeal(meal.id);
                }
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Total Calories */}
      <p className="total">
        Total: {meals.reduce((sum, m) => sum + m.calories, 0)} kcal
      </p>
    </section>
  );
}

export default MealTracker;
