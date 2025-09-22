import "./App.css"

import WorkoutLog from "./Components/workoutlogs/Workoutlog";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import NavBar from "./Components/nav/nav";
import MealTracker from "./Components/mealtracker/mealtracker";
import ProgressTracker from "./Components/progresstracker/progresstracker";


function App() {
  return (
    
    <>

      < Header />
      < NavBar />
      < WorkoutLog />
      < MealTracker />
      < ProgressTracker />
      < Footer team={["Arshdeep Kaur", "Ashmandeep Kaur", "Kiranjeet Kaur"]} /> 
    </>
  );
};



export default App;