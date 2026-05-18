import {
  Box,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";

function About() {
  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "React",
    "SQL",
    "Flask",
    "Git",
    "R",
    "Stata",
    "HTML/CSS",
    "Bloomberg Terminal",
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Stack spacing={4}>
        <Typography variant="h3" fontWeight="bold">
          About Me
        </Typography>

        <Typography variant="body1">
          I am a Computer Science and Quantitative Economics student at
          Smith College with interests in software development, financial
          analysis, interactive media, and technology-focused research.
        </Typography>

        <Typography variant="body1">
          My experience includes developing web applications, building games,
          participating in hackathons, conducting academic research, and
          supporting students through Bloomberg Terminal training and financial
          research initiatives.
        </Typography>

        <Typography variant="body1">
          Outside of coursework, I am involved in student organizations
          including the Smith College Investment Club, Girls Who Code,
          Rewriting the Code, and Sunrise Movement.
        </Typography>

        <Box>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Skills
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            flexWrap="wrap"
          >
            {skills.map((skill) => (
              <Chip key={skill} label={skill} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default About;