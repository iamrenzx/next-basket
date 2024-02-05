import { Button, Grid, Typography } from "@mui/material";

const Experience = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center" // Center the content vertically
      sx={{
        background: `url(/images/post-cover-4.jfif)`, // Relative path
        backgroundSize: "cover",
        backgroundPosition: "center", // Center the background image
        objectFit: "fill",
        position: "relative",
        minHeight: "600px",
        textAlign: "center", // Center the content horizontally
      }}
    >
      <Grid item p={3} xs={12} md={4}>
        <Typography variant="body2" my={3} fontWeight="bold" color="primary">
          Designing Better Experience
        </Typography>
        <Typography variant="h4" my={2} fontWeight="bold">
          Problems trying to resolve the conflict between
        </Typography>
        <Typography variant="body2" my={2}>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </Typography>
        <Typography
          my={2}
          variant="h6"
          color="secondary.main"
          fontWeight="bold"
        >
          $16.48
        </Typography>
        <Button variant="contained" sx={{ px: "40px", py: "15px" }}>
          <Typography variant="body2" color="white" fontWeight="bold">
            ADD YOUR CALL TO ACTION
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Experience;
