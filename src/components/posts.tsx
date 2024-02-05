import {
  AccessAlarm,
  ArrowForwardIos,
  SignalCellularAltOutlined,
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const Posts = () => {
  const images = [
    "images/post-cover-1.jfif",
    "images/post-cover-2.jfif",
    "images/post-cover-3.jfif",
  ];
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
          <Typography color="primary" variant="body2" fontWeight="bold">
            Practice Advice
          </Typography>
          <Typography fontWeight="bold" variant="h3">
            Featured Posts
          </Typography>
        </Grid>
      </Grid>
      <Grid container item spacing={1} justifyContent="center" mt={3}>
        {images.map((image, idx) => {
          return (
            <Grid item xs={12} key={image + idx} md={4}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  sx={{ height: "300px", width: "100%" }}
                  image={image}
                  title="Post cover 1"
                />
                <CardContent>
                  <Grid container gap={1}>
                    <Grid item xs={12} display="flex" gap={1}>
                      <Typography color="primary" variant="caption">
                        Google
                      </Typography>
                      <Typography variant="caption">Trending</Typography>
                      <Typography variant="caption">New</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">
                        Loudest à la Madison #1 (L'integral)
                      </Typography>
                      <Typography variant="body2">
                        We focus on ergonomics and meeting you where you work.
                        It's only a keystroke away.
                      </Typography>
                    </Grid>
                    <Grid
                      mt={2}
                      item
                      xs={12}
                      container
                      justifyContent="space-between"
                    >
                      <Grid item display="flex" alignItems="center">
                        <AccessAlarm fontSize="small" />
                        <Typography variant="caption">22 April 2021</Typography>
                      </Grid>
                      <Grid item display="flex" alignItems="center">
                        <SignalCellularAltOutlined fontSize="small" />
                        <Typography variant="caption">10 comments</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions sx={{ py: 2 }}>
                  <Button size="small">
                    <Typography
                      color="textSecondary"
                      fontWeight="bold"
                      variant="body2"
                      alignItems="center"
                      display="flex"
                    >
                      Learn More{" "}
                      <ArrowForwardIos color="primary" sx={{ mx: 1 }} />
                    </Typography>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Posts;
