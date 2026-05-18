import { useState } from "react";
import {
  Alert,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Stack spacing={4}>
        <Typography variant="h3" fontWeight="bold">
          Contact
        </Typography>

        <Typography variant="body1">
          Feel free to reach out through LinkedIn, GitHub, or the contact form
          below.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
            />

            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
            />

            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={5}
              fullWidth
              required
            />

            <Button type="submit" variant="contained" size="large">
              Send Message
            </Button>

            {submitted && (
              <Alert severity="success">
                Your message has been submitted.
              </Alert>
            )}
          </Stack>
        </form>
      </Stack>
    </Container>
  );
}

export default Contact;