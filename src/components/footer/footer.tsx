import "./Footer.css";

function Footer({ team }: { team: string[] }) {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Fitness Tracker Team © {year}</p>
      <p>Team Members: {team.join(", ")}</p>
    </footer>
  );
}

export default Footer;
