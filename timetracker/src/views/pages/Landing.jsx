import { Container, Typography, Button, Box } from '@mui/material';

const LandingPage = () => {
  const userName = "Zachary Sullivan"; 

  return (
    <Container>
      <Box textAlign="center" padding={5}>
        <Typography variant="h3" gutterBottom>
          Welcome to the Time Tracker App!
        </Typography>
        <Typography variant="h5" paragraph>
          Hello, {userName}! We&apos;re excited to help you track your time.
        </Typography>
        <Typography variant="body1" paragraph>
          Manage your activities, jobs, and hours efficiently.
        </Typography>
        <Button variant="contained" color="primary" href="/login">
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
