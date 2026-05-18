import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

function Projects() {
  const projects = [
    {
      title: "JA Wages Tracker Website",
      technologies: "Python, Flask, SQL",
      description:
        "Developed a web application that uploaded CSV attendance files and automatically calculated member wages, improving efficiency and reducing manual work.",
    },
    {
      title: "Wheely Mammoths Rideshare",
      technologies: "Java, HTML/CSS, Gradle",
      description:
        "Built a proof-of-concept campus rideshare website during a 24-hour hackathon. The project won 1st Place in Sustainable Transportation.",
    },
    {
      title: "Alien Assassin Game",
      technologies: "Ren'Py, Python",
      description:
        "Created a visual novel game during Global Game Jam with branching storylines, multiple endings, and interactive dialogue systems.",
    },
    {
      title: "Shopping Mall Simulator",
      technologies: "Java",
      description:
        "Designed an interactive shopping simulation game where players completed objectives, managed resources, and interacted with stores and employees.",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
      >
        Projects
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        A selection of software, game development, and hackathon projects.
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                height: "100%",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="subtitle2"
                  color="primary"
                  gutterBottom
                >
                  {project.technologies}
                </Typography>

                <Typography variant="body1">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;