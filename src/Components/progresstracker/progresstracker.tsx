import "./progresstracker.css";

export function ProgressTracker() {
  const progress = [
    { id: 1, date: "2025-09-01", goal: "Run 2 km", status: "Completed" },
    { id: 2, date: "2025-09-03", goal: "30 push-ups", status: "Completed" },
    { id: 3, date: "2025-09-05", goal: "Yoga 20 min", status: "In Progress" },
    { id: 4, date: "2025-09-07", goal: "Drink 2L water", status: "Not Started" },
    { id: 5, date: "2025-09-12", goal: "Did Planks", status : "Completed"}
  ];

  return (
    <section className="progress-tracker">
      <h2><i>Progress Tracker</i></h2>
      <img src="/Fitness.png" alt="Fitness Progress" width="250" height="150" />
 
      <ul>
        {progress.map((item) => (
          <li key={item.id}>
            <p><b>Date:</b> {item.date}</p>
            <p><b>Goal:</b> {item.goal}</p>
            <p><b>Status:</b> {item.status}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProgressTracker;
