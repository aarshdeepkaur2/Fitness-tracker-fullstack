import { Outlet } from "react-router";
import  NavBar  from "./nav/nav";
import Footer from "./footer/footer";

export function Layout() {
  return (
    <div className="p-8 flex flex-col min-h-screen bg-stone-200">
      <NavBar />
      <main className="flex-grow p-4">
        <Outlet />
      </main>


      <Footer team={["Arshdeep Kaur", "Ashmandeep Kaur", "Kiranjeet Kaur"]} />
    </div>
  );
}
