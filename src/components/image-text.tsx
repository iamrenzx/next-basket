import { Box, Typography, Button, useTheme } from "@mui/material";

type ImageTextProps = {
  src: string;
  height: number | string;
};

const ImageText = ({ src, height }: ImageTextProps) => {
  const theme = useTheme();

  return (
    <Box position="relative">
      <Box
        component="img"
        src={src}
        sx={{
          width: "100%",
          height,
          objectFit: "cover",
          [theme.breakpoints.down("md")]: {
            height: "300px",
          },
        }}
        alt="card cover"
      />
      <Box
        sx={{
          position: "absolute",
          top: "48px",
          left: "48px",
          [theme.breakpoints.down("md")]: {
            top: "32px",
            left: "32px",
          },
        }}
      >
        <Typography variant="body1" color="success.main" fontWeight="bold">
          5 Items
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          Furniture
        </Typography>
        <Button
          variant="text"
          sx={{ textTransform: "none", px: 0, fontWeight: "bold" }}
          color="inherit"
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default ImageText;
