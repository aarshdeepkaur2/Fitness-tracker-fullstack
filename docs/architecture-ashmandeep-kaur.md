# Architecture

### Hook: `useMeals`
Handles the UI logic for adding, removing, and listing meals.
Keeps UI concerns separate from service and repository layers.
Used inside `MealTracker.tsx`.


### Service: `mealService`
Contains all business logic, like calculating total calories
and preparing new meal entries. Used inside the custom hook.


### Repository: `mealRepository`
Stores the mock test data (10 meals) and defines CRUD functions.
Used by the service to access or modify meal data.
