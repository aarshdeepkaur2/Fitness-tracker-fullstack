import "./nav.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Workouts</a></li>
        <li><a href="#">Meals</a></li>
        <li><a href="#">Progress</a></li>
        <li><a href="#">My Profile</a></li>
      </ul>
    </nav>
  );
}
