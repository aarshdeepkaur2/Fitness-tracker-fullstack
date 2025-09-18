import "./App.css"

import WorkoutLog from "./components/workoutlogs/Workoutlog";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import NavBar from "./components/nav/nav";
import MealTracker from "./components/mealtracker/mealtracker";


function App() {
  return (
    
    <>

      < Header />
      < NavBar />
      < WorkoutLog />
      <MealTracker />
      < Footer team={["Arshdeep Kaur", "Ashmandeep Kaur", "Kiranjeet Kaur"]} /> 
    </>
  );
};


export default App;

