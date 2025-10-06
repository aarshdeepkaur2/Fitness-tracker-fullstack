import React, { useState } from "react";
import "./mealtracker.css";
import MealForm from "./MealForm";

interface Meal {
  id: number;
  name: string;
  calories: number;
}

function MealTracker() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [mealName, setMealName] = useState("");
  const [mealCalories, setMealCalories] = useState<number | "">("");

  // Add Meal
  const handleAddMeal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mealName.trim() || !mealCalories || mealCalories <= 0) return;

    const newMeal: Meal = {
      id: Date.now(),
      name: mealName,
      calories: Number(mealCalories),
    };

    setMeals([...meals, newMeal]);
    setMealName("");
    setMealCalories("");
  };

  // Remove Meal
  const handleRemoveMeal = (id: number) => {
    setMeals(meals.filter((meal) => meal.id !== id));
  };

  // Calculate total
  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);

  //  Everything below should be inside this single return
  return (
    <section className="meal-tracker">
      <h2> Daily Meal Tracker</h2>

      <MealForm
        mealName={mealName}
        setMealName={setMealName}
        mealCalories={mealCalories}
        setMealCalories={setMealCalories}
        onAddMeal={handleAddMeal}
      />

      {/* Meal List */}
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <span className="meal-name">{meal.name}</span>
            <span className="meal-calories">{meal.calories} kcal</span>
            <button onClick={() => handleRemoveMeal(meal.id)}>cancel</button>
          </li>
        ))}
      </ul>

      <p className="total">Total: {totalCalories} kcal</p>
    </section>
  );
}

export default MealTracker;
