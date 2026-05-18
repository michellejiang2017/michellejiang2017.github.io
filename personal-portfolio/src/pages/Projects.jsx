function Projects() {
  const projects = [
    {
      title: "Wage Tracking App",
      description: "A web app that helps organize payroll information more efficiently.",
    },
    {
      title: "Campus Rideshare Prototype",
      description: "A hackathon project focused on helping students share rides.",
    },
    {
      title: "Portfolio Website",
      description: "A React Router website with multiple pages and clean navigation.",
    },
  ];

  return (
    <section>
      <h1>Projects</h1>

      <div className="cards">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;