import "./header.css";

export default function Header() {
  return (
    <header className="header">
     <span>
          <img
            src="/fitnesslogo.png"
            alt="Pixell River Logo"
            width="250"
            height="150"
          />
        </span>
      <h1>Fitness Tracker</h1>
      <p>Welcome to the Fitness Journey!!</p>
      <p>Track your workouts, monitor progress, and stay motivated. </p>
    </header>
  );
}
