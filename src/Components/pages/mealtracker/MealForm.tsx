import React, { useState } from "react";

interface MealFormProps {
  mealName: string;
  setMealName: React.Dispatch<React.SetStateAction<string>>;
  mealCalories: number | "";
  setMealCalories: React.Dispatch<React.SetStateAction<number | "">>;
  onAddMeal: (e: React.FormEvent) => void;
}

// Predefined food options
const foodOptions = [
  { name: "Oatmeal", calories: 350 },
  { name: "Grilled Chicken Salad", calories: 500 },
  { name: "Salmon with Veggies", calories: 600 },
  { name: "Protein Bar", calories: 200 },
  { name: "Pasta Alfredo", calories: 700 },
  { name: "Fruit Smoothie", calories: 250 },
  { name: "Avocado Toast", calories: 300 },
  { name: "Tacos", calories: 450 },
  { name: "Cheeseburger", calories: 800 },
  { name: "Caesar Salad", calories: 400 },
];

function MealForm({
  mealName,
  setMealName,
  mealCalories,
  setMealCalories,
  onAddMeal,
}: MealFormProps) {
  const [error, setError] = useState("");

  // Handle food selection from dropdown
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFood = foodOptions.find(
      (food) => food.name === e.target.value
    );
    if (selectedFood) {
      setMealName(selectedFood.name);
      setMealCalories(selectedFood.calories);
      setError("");
    }
  };

  // Validate custom meal name input
  const validateMealName = (value: string) => {
    setMealName(value);
    if (value.trim().length < 2) {
      setError("Meal name must be at least 2 characters.");
    } else {
      setError("");
    }
  };

  //  Everything must be inside a single return JSX block
  return (
    <form onSubmit={onAddMeal}>
      <select
        onChange={handleSelectChange}
        defaultValue=""
        style={{ marginBottom: "0.5rem" }}
      >
        <option value="">Select a food option</option>
        {foodOptions.map((food) => (
          <option key={food.name} value={food.name}>
            {food.name} ({food.calories} kcal)
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Or enter custom meal"
        value={mealName}
        onChange={(e) => validateMealName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Calories"
        value={mealCalories}
        onChange={(e) =>
          setMealCalories(e.target.value ? Number(e.target.value) : "")
        }
      />

      <button type="submit">Add Meal</button>

      {error && (
        <p style={{ color: "red", fontSize: "0.9rem", marginTop: "0.5rem" }}>
          {error}
        </p>
      )}
    </form>
  );
}

export default MealForm;
