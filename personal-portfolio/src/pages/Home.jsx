import { Button, Container, Stack, Typography } from "@mui/material";

function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Stack spacing={3} alignItems="flex-start">
        <Typography
          variant="h2"
          component="h1"
          fontWeight="bold"
          color="black"
        >
          Hi, I&apos;m Michelle Jiang
        </Typography>

        <Typography variant="h5" color="text.secondary">
          Computer Science and Quantitative Economics student at Smith College.
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: "700px" }}>
          I am interested in software development, interactive media, financial
          research, and data-driven problem solving. My work includes web apps,
          games, hackathon projects, research, and student-led finance projects.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            href="https://github.com/michellejiang2017/"
            target="_blank"
          >
            GitHub
          </Button>

          <Button
            variant="outlined"
            href="https://www.linkedin.com/in/michellejiang2017/"
            target="_blank"
          >
            LinkedIn
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Home;