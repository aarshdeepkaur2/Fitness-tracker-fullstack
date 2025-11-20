import {  Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import WorkoutLog from "./Components/pages/workoutlogs/Workoutlog";
import ProgressTracker from "./Components/pages/progresstracker/progresstracker";
import MealTracker from "./Components/pages/mealtracker/mealtracker";
import Header from "./Components/pages/LandingPage/header/header";
import { NotFound } from "./Components/pages/NotFound/NotFound";
import WorkoutForm from "./Components/pages/workoutlogs/Workoutform";
import "./App.css"; 

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Header />} />
          <Route path="workout-log" element={<WorkoutLog />} />
          <Route path="workout-form" element={<WorkoutForm onAddWorkout={() => {}} />} />
          <Route path="progress-tracker" element={<ProgressTracker />} />
          <Route path="meal-tracker" element={<MealTracker />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
}

export default App;