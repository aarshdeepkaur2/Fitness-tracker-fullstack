import React, { useState } from "react";
import { useProgress } from "../../../hooks/useProgress";
import "../progresstracker/progresstracker.css";

function formatStatus(status: string) {
  switch (status) {
    case "NOT_STARTED": return "Not Started";
    case "IN_PROGRESS": return "In Progress";
    case "COMPLETED": return "Completed";
    default: return status;
  }
}

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

  const handleAddGoal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newGoal.trim()) {
      await addGoal(newGoal);
      setNewGoal("");
    }
  };

  return (
    <div className="progress-tracker">
      <img src="/Fitness.png" alt="Fitness" />

      <h2>My Progress Tracker</h2>

      <form onSubmit={handleAddGoal} className="progress-form">
        <input
          type="text"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          placeholder="Write your new goal"
        />
        <button type="submit" className="add-btn">Add</button>
      </form>

      <ul>
        {progress.map((item) => (
          <li key={item.id}>
            <div className="goal-info">
              <strong>{item.goal}</strong> — {formatStatus(item.status)}
            </div>

            <div className="status-buttons">
              <button onClick={() => markNotStarted(item.id)}>Not Started</button>
              <button onClick={() => markInProgress(item.id)}>In Progress</button>
              <button onClick={() => markCompleted(item.id)}>Done</button>
              <button className="remove" onClick={() => removeGoal(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
