import React, { useState } from "react";
import type { Meal } from "../../../types/Meal";

interface Props {
  onAddMeal: (meal: Meal) => void;
}

const MealForm: React.FC<Props> = ({ onAddMeal }) => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState<number | "">("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !calories || Number(calories) <= 0) {
      setError("Please enter a valid meal name and calories.");
      return;
    }

    onAddMeal({ id: Date.now(), name: name.trim(), calories: Number(calories) });
    setName("");
    setCalories("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Meal name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) =>
          setCalories(e.target.value ? Number(e.target.value) : "")
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
};

export default MealForm;
