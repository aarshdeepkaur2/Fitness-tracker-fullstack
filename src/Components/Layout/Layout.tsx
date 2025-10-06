import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "./nav/nav";
import Footer from "./footer/footer";

export function Layout() {
  const [workoutsCompleted, setWorkoutsCompleted] = useState(0);
  
  return (
    <div className="p-8 flex flex-col min-h-screen bg-stone-200">
      <NavBar />
      <main className="flex-grow p-4">
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
