import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "./nav/nav";
import Footer from "./footer/footer";

export function Layout() {
  const [workoutsCompleted, setWorkoutsCompleted] = useState(0);
  
  return (
    <div className="Layout">
      <NavBar />
      <main className="main-content">
        <Outlet
          context={{
            workoutsCompleted,
            setWorkoutsCompleted,
          }}
        />
      </main>
      <Footer team={["Arshdeep Kaur", "Ashmandeep Kaur", "Kiranjeet Kaur"]} />
    </div>
  );
}
