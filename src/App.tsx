import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import WorkoutLog from "./Components/pages/workoutlogs/Workoutlog";
import ProgressTracker from "./Components/pages/progresstracker/progresstracker";
import MealTracker from "./Components/pages/mealtracker/mealtracker";
import Header from "./Components/pages/LandingPage/header/header";
import { NotFound } from "./Components/pages/NotFound/NotFound";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Header />,
      },
      {
        path: "workoutlog",
        element: <WorkoutLog />,
      },
      {
        path: "progress-tracker",
        element: <ProgressTracker />,
      },
      {
        path: "meal-tracker",
        element: <MealTracker/>
      
      }
     
    ],
  },
     {
        path: "*", 
        element: < NotFound />,
     }
    ]);
 

function App() {
  return <RouterProvider router={router} />;
}

export default App;
