import "./Workoutlog.css";
import workouts from "../../assets/workoutdata.json";

export default function WorkoutLog() {
  return (
    <section className="workoutlog">
      <h2><u>My Workout Log</u></h2>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            <p><strong>ID:</strong> {workout.id}</p>
            <p><strong>Date:</strong> {workout.date}</p>
            <p><strong>Exercise:</strong> {workout.exercise}</p>
            <p><strong>Details:</strong> {workout.reps}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
