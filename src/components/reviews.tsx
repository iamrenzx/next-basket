import { Box, Grid, Avatar, Rating, Typography } from "@mui/material";

const Reviews = () => {
  const getRandomImage = () => {
    const imageTypes = ["card-cover", "post-cover"];

    const getRandomNumber = (max: number) =>
      Math.floor(Math.random() * max) + 1;

    const imageType = imageTypes[Math.floor(Math.random() * imageTypes.length)];

    const maxIndex = 4;

    const randomIndex = getRandomNumber(maxIndex);

    const imageUrl = `images/${imageType}-${randomIndex}.jfif`;

    return imageUrl;
  };

  return (
    <Grid
      container
      px={{ xl: 35, md: 10, xs: 5 }}
      py={10}
      rowSpacing={3}
      columnSpacing={{ xs: 0, md: 3 }}
    >
      <Grid container item alignItems="center" spacing={3}>
        <Grid item xs={12} md={6} textAlign="center" justifyContent="center">
          <Typography variant="h5" fontWeight="bold" my={1}>
            What they say about us
          </Typography>
          <Avatar
            src={"images/avatar.png"}
            sx={{ height: "90px", width: "90px", margin: "auto", my: 1 }}
          ></Avatar>
          <Rating
            name="simple-controlled"
            value={4}
            sx={{ my: 1 }}
            precision={0.5}
          />
          <Typography
            mt={1}
            mb={3}
            fontWeight="bold"
            color="textSecondary"
            variant="body2"
          >
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </Typography>
          <Typography my={1} fontWeight="bold" color="primary" variant="body2">
            Regina Miles
          </Typography>
          <Typography my={1} fontWeight="bold" variant="body2">
            Designer
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          container
          textAlign="center"
          justifyContent="center"
          spacing={2}
        >
          {Array.from({ length: 9 }, (_, index) => (
            <Grid item key={index} xs={4}>
              <Box
                component="img"
                src={getRandomImage()}
                alt={`Random Image ${index}`}
                style={{ width: "100%", height: "140px", objectFit: "cover" }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Reviews;
