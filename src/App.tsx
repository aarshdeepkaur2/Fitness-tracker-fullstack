import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Layout } from "./Components/Layout/Layout";
import WorkoutLog from "./Components/pages/workoutlogs/Workoutlog";
import ProgressTracker from "./Components/pages/progresstracker/progresstracker";
import MealTracker from "./Components/pages/mealtracker/mealtracker";
import Header from "./Components/pages/LandingPage/header/header";
import { NotFound } from "./Components/pages/NotFound/NotFound";

function App() {
  const [workoutsCompleted, setWorkoutsCompleted] = useState(0);

  return (
    <BrowserRouter>*
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Header />} />
          <Route
            path="workout-log"
            element={
              <WorkoutLog
                workoutsCompleted={workoutsCompleted}
                setWorkoutsCompleted={setWorkoutsCompleted}
              />
            }
          />
          <Route path="progress-tracker" element={<ProgressTracker />} />
          <Route path="meal-tracker" element={<MealTracker />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
