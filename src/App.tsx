import "./App.css";

import MealTracker from "./component/mealtracker/mealtracker";
 
function App() {
  return (
   
    <>
      < MealTracker />
    </>
  );
};
 
 
export default App;
 
 

import WorkoutLog from "./components/workoutlogs/Workoutlog";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import NavBar from "./components/nav/nav";


function App() {
  return (
    
    <>

      < Header />
      < WorkoutLog />
      < Footer team={["Arshdeep Kaur", "Ashmandeep Kaur", "Kiranjeet Kaur"]} /> 
    < Header />
    < NavBar />
    < WorkoutLog />

    </>
  );
};


export default App;

