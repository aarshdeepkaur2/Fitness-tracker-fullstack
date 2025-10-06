import { Link } from "react-router-dom";
import "./nav.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/workouts">Workouts</Link>
        </li>
        <li>
          <Link to="/meal-tracker">Meals</Link>
        </li>
        <li>
          <Link to="/progress-tracker">Progress</Link>
        </li>
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
