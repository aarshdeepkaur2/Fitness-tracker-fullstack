// High-level component file

interface Meal {
  id: number;
  name: string;
  calories: number;
}

function MealTracker() {
  const meals: Meal[] = [
    { id: 1, name: "Breakfast - Oatmeal", calories: 350 },
    { id: 2, name: "Lunch - Grilled Chicken Salad", calories: 500 },
    { id: 3, name: "Dinner - Salmon with Veggies", calories: 600 },
    { id: 4, name: "Snack - Protein Bar", calories: 200 },
  ];

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);

  return (
    <section className="meal-tracker">
      <h2>Today's Meals</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <span className="meal-name">{meal.name}</span>
            <span className="meal-calories">{meal.calories} kcal</span>
          </li>
        ))}
      </ul>
      <p className="total">Total: {totalCalories} kcal</p>
    </section>
  );
}

export default MealTracker;
