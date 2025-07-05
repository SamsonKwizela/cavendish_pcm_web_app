import { Box, Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e6eef6",
        color: "white",
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg" style={{ color: "black" }}>
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              About PCM
            </Typography>
            <Typography variant="body2">
              Cavendish PCM is dedicated to helping students excel in science
              through quality virtual labs, tutorials, and resources.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="/" color="inherit" underline="hover" display="block">
                Home
              </Link>
              <Link
                href="/about"
                color="inherit"
                underline="hover"
                display="block"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                color="inherit"
                underline="hover"
                display="block"
              >
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">Email: pcm@cavendish.edu.zm</Typography>
            <Typography variant="body2">Phone: +260 97 000 0000</Typography>
            <Typography variant="body2">Location: Lusaka, Zambia</Typography>
          </Grid>
        </Grid>

        {/* Bottom Note */}
        <Box textAlign="center" pt={4}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Cavendish PCM. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
