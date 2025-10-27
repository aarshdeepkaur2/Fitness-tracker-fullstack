import { useState, useEffect } from "react";
import { Button } from "../../../../ui/Button";
import type { Workout } from "../../types/workout";
import "./Workoutlog.css";

interface WorkoutFormProps {
  onAddWorkout: (newWorkout: Omit<Workout, "id" | "favorite">) => void;
  onEditWorkout?: (updatedWorkout: Workout) => void;
  editingWorkout?: Workout | null;
}

export default function WorkoutForm({
  onAddWorkout,
  onEditWorkout,
  editingWorkout,
}: WorkoutFormProps) {
  const [formData, setFormData] = useState({
    date: "",
    exercise: "",
    reps: "",
  });

  useEffect(() => {
    if (editingWorkout) {
      setFormData({
        date: editingWorkout.date,
        exercise: editingWorkout.exercise,
        reps: editingWorkout.reps,
      });
    } else {
      setFormData({ date: "", exercise: "", reps: "" });
    }
  }, [editingWorkout]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date || !formData.exercise || !formData.reps) return;

    if (editingWorkout && onEditWorkout) {
      onEditWorkout({ ...editingWorkout, ...formData });
    } else {
      onAddWorkout(formData);
    }

    setFormData({ date: "", exercise: "", reps: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="workout-form">
      <h3>{editingWorkout ? "Edit Workout" : "Add a New Workout"}</h3>
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        className="form-input"
        required
      />
      <input
        type="text"
        placeholder="Nmae of Exercise"
        value={formData.exercise}
        onChange={(e) => setFormData({ ...formData, exercise: e.target.value })}
        className="form-input"
        required
      />
      <input
        type="text"
        placeholder="Duration / Reps"
        value={formData.reps}
        onChange={(e) => setFormData({ ...formData, reps: e.target.value })}
        className="form-input"
        required
      />
      <Button type="submit" className="add-button">
        {editingWorkout ? "Update Workout" : "Add Workout"}
      </Button>
    </form>
  );
}
