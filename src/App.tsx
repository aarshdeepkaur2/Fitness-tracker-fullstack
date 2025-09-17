import "./App.css";
import WorkoutLog from "./components/workoutlogs/Workoutlog";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    
    <>
      < Header />
      < WorkoutLog />
      < Footer team={["Arshdeep Kaur", "Ashmandeep Kaur", "Kiranjeet Kaur"]} /> 
    </>
  );
};


export default App;
