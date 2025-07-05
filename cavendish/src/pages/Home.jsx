import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", py: 5 }}>
      <Container maxWidth="md" sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to Cavendish PCM
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Empowering students with knowledge, skills, and support.
        </Typography>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
              <HomeIcon sx={{ fontSize: 50, color: "#1976d2", mb: 2 }} />
              <Typography variant="h6" fontWeight="bold">
                Easy Navigation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Quickly find what you need with our simple and clean layout.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
              <SchoolIcon sx={{ fontSize: 50, color: "#1976d2", mb: 2 }} />
              <Typography variant="h6" fontWeight="bold">
                Quality Resources
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Access labs, lessons, quizzes, and learning materials curated by
                experts.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
              <ContactSupportIcon
                sx={{ fontSize: 50, color: "#1976d2", mb: 2 }}
              />
              <Typography variant="h6" fontWeight="bold">
                Supportive Community
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We’re here to help — connect with peers and instructors.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
