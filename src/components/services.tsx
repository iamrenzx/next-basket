import { LocalLibrary, MenuBook, TrendingUp } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

const iconStyle = { height: "72px", width: "72px" };

const Services = () => {
  return (
    <Grid
      container
      px={{ xl: 35, md: 10, xs: 5 }}
      py={10}
      rowSpacing={3}
      columnSpacing={{ xs: 0, md: 3 }}
    >
      <Grid container item justifyContent="center" textAlign="center">
        <Grid item xs={12}>
          <Typography color="textSecondary" variant="h6">
            Featured Products
          </Typography>
          <Typography fontWeight="bold" variant="h5">
            THE BEST SERVICES
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Problems trying to resolve the conflict between{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item justifyContent="center" mt={3} textAlign="center">
        <Grid item xs={12} md={4}>
          <LocalLibrary sx={iconStyle} color="primary" />
          <Typography pt={3} fontWeight="bold" variant="h5">
            Easy Wins
          </Typography>
          <Typography pt={3} variant="body2" color="textSecondary">
            Get your best looking smile now!
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <MenuBook sx={iconStyle} color="primary" />
          <Typography pt={3} fontWeight="bold" variant="h5">
            Concrete
          </Typography>
          <Typography pt={3} variant="body2" color="textSecondary">
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <TrendingUp sx={iconStyle} color="primary" />
          <Typography pt={3} fontWeight="bold" variant="h5">
            Hack Growth
          </Typography>
          <Typography pt={3} variant="body2" color="textSecondary">
            Overcame any hurdle or any other problem.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
