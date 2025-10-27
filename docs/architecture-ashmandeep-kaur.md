#  Architecture 

##  Hook: `useMeals`

### 1. What does this hook do?
The `useMeals` hook manages **presentation logic** for meals — including state management, adding, and deleting meals.  
It exposes reusable logic so multiple components (like `MealTracker` and `MealForm`) can access the same meal data without prop drilling.

### 2. How was this logic decided and how does it separate concerns?
This hook is focused purely on **UI state and interactions**, not on validation or data persistence.  
All business rules and data operations are delegated to the **service** and **repository** layers.  
This separation keeps components simple and makes the logic reusable.

### 3. Where is this used?
- Used in the `MealTracker` component to display, add, and remove meals.  
- Also referenced in `MealForm` to trigger `addMeal()`.



##  Service: `mealService`

### 1. What does this service do?
The `mealService` contains **business logic** for the application.  
It validates meals before adding them, sorts them by calories, and delegates all data operations to the repository.

### 2. How was this logic decided and how does it separate concerns?
Business rules like validation and sorting don’t belong in the UI or data layers.  
By isolating them here, the service ensures that the app’s logic is consistent, easy to maintain, and testable.  
This follows the principle of separating **business logic** from **presentation** and **data access**.

### 3. Where is this used?
- Used by the `useMeals` hook to get, add, and delete meals.  
- Acts as the middle layer between React components and data storage.



##  Repository: `mealRepository`

### 1. What does this repository do?
The `mealRepository` provides **data access** methods to interact with the app’s mock data (`testMeals`).  
It defines CRUD operations:
- `getAllMeals()` — fetch all meals  
- `addMeal()` — add a new meal  
- `deleteMeal()` — remove a meal by ID

### 2. How was this logic decided and how does it separate concerns?
The repository is responsible only for **storing and retrieving data**, not for validation or presentation.  
This makes it easy to replace the mock data with a real backend later without changing other layers.

### 3. Where is this used?
- Used inside `mealService` to perform all data operations.



##  Test Data: `testMeals`

### 1. What does this contain?
An array of 10 pre-defined `Meal` objects used for testing and development purposes.  
Each object follows the `Meal` type with fields like `id`, `name`, and `calories`.

### 2. How was this logic decided and how does it separate concerns?
This data simulates a real database during development.  
It helps test the app’s structure and logic before connecting to an actual backend in future sprints.

### 3. Where is this used?
- Used by the `mealRepository` as its data source.



