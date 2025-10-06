import "./progresstracker.css";
import { useState } from "react";

function ProgressTracker() {

  const [progress, setProgress] = useState([
    { id: 1, date: "2025-09-01", goal: "Run 2 km", status: "Completed" },
    { id: 2, date: "2025-09-03", goal: "30 push-ups", status: "Completed" },
    { id: 3, date: "2025-09-05", goal: "Yoga 20 min", status: "In Progress" }
  ]);

  const [newGoal, setNewGoal] = useState("");

  function addGoal(e) {
    e.preventDefault();
    if (newGoal === "") return;
    const newItem = {
      id: progress.length + 1,
      date: new Date().toISOString().split("T")[0],
      goal: newGoal,
      status: "Not Started"
    };
    setProgress([...progress, newItem]);
    setNewGoal("");
  }

  function removeGoal(id) {
    setProgress(progress.filter(item => item.id !== id));
  }

  return (
    <section className="progress-tracker">
      <h2>Progress Tracker</h2>
      <img src="/Fitness.png" alt="Fitness Progress" width="250" height="150" />

      <form onSubmit={addGoal}>
        <input
          type="text"
          placeholder="Enter new goal"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {progress.map((item) => (
          <li key={item.id}>
            <p><b>Date:</b> {item.date}</p>
            <p><b>Goal:</b> {item.goal}</p>
            <p><b>Status:</b> {item.status}</p>
            <button onClick={() => removeGoal(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProgressTracker;
