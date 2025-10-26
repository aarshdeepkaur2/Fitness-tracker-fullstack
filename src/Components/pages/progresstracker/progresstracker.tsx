import React, { useState } from "react";
import { useProgress } from "../../../hooks/useProgress";
import "../progresstracker/progresstracker.css";

export default function ProgressTracker() {
  const {
    progress,
    addGoal,
    markNotStarted,
    markInProgress,
    markCompleted,
    removeGoal,
  } = useProgress();

  const [newGoal, setNewGoal] = useState("");

  const handleAddGoal = (e: React.FormEvent) => {

    e.preventDefault();
    if (newGoal.trim()) {
      addGoal(newGoal);
      setNewGoal("");
    }
  };

  return (
    <div className="progress-tracker">
      {/* showing image on top */}

      <img src="/Fitness.png" alt="Fitness" />

      <h2>My Progress Tracker</h2>

      <form onSubmit={handleAddGoal}>

        <input
          type="text"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          placeholder="write your new goal"
        />
        <button type="submit">Add </button>
      </form>

      <ul>
        {progress.map((item) => (
          <li key={item.id}>
            <div className="goal-info">
              <strong>{item.goal}</strong> — {item.status} ({item.date})
            </div>

            <div className="status-buttons">
              <button onClick={() => markNotStarted(item.id)}>Not Started</button>
              <button onClick={() => markInProgress(item.id)}>In Progress</button>
              <button onClick={() => markCompleted(item.id)}>Done</button>
              <button className="remove" onClick={() => removeGoal(item.id)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
