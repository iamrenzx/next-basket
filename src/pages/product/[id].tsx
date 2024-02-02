import Layout from "@/components/layout";
import ProductsList from "@/components/products-list";
import { useGetProductIdQuery } from "@/services/products/productApi";
import {
  ArrowForwardIos,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  Visibility,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Rating,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Product = () => {
  const theme = useTheme();

  const router = useRouter();
  const productId = router.query.id;

  const { data, isLoading, isFetching } = useGetProductIdQuery({
    id: Number(productId || 1),
  });

  const imagesAvailable =
    data?.images?.slice(0, 4) || Array.from({ length: 4 });

  const colors = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"];

  const [currentImage, setCurrentImage] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const [rating, setRating] = useState(0);
  useEffect(() => {
    // Update state only if data is available
    if (data && (!isLoading || !isFetching)) {
      setCurrentImage(data.thumbnail || "");
      setRating(data.rating || 0);
    }
  }, [data, isLoading, isFetching]);

  return (
    <Layout>
      <Box sx={{ background: grey[50], p: 3, mt: 5 }}>
        <Grid container spacing={3}>
          <Grid item display="flex" alignItems="center" gap={2} xs={12}>
            <Typography fontWeight="bold" variant="body2">
              Home
            </Typography>
            <ArrowForwardIos color="action" fontSize="small" />
            <Typography fontWeight="bold" color="textSecondary" variant="body2">
              Shop
            </Typography>
          </Grid>
          <Grid item container xs={12} spacing={10}>
            <Grid item xs={12} md={6}>
              {isLoading || isFetching ? (
                <Skeleton animation="wave" height="450px" width="100%" />
              ) : (
                <Box
                  component="img"
                  src={currentImage || data?.thumbnail}
                  sx={{
                    width: "100%",
                    height: "450px",
                    objectFit: "cover",
                    [theme.breakpoints.down("md")]: {
                      height: "360px",
                    },
                  }}
                  alt={`product item`}
                />
              )}

              <Grid container pt={2} spacing={3}>
                {imagesAvailable?.map((image, idx) => {
                  return (
                    <Grid item xs={3} key={image || "" + idx}>
                      {isLoading || isFetching ? (
                        <Skeleton
                          animation="wave"
                          height="100px"
                          width="100%"
                        />
                      ) : (
                        <Box
                          onMouseOver={() => setCurrentImage(image)}
                          component="img"
                          src={image}
                          sx={{
                            width: "100%",
                            height: "100px",
                            objectFit: "cover",
                            [theme.breakpoints.down("md")]: {
                              height: "100px",
                            },
                            cursor: "pointer",
                            transition: "transform 0.2s",
                            "&:hover": {
                              transform: "scale(1.1)",
                            },
                          }}
                          alt={`product item`}
                        />
                      )}
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item container xs={12} md={6}>
              <Grid item xs={12}>
                {isLoading || isFetching ? (
                  <Skeleton animation="wave" width="100%" height="100px" />
                ) : (
                  <Typography variant="h6">{data?.title}</Typography>
                )}
              </Grid>
              <Grid item display="flex" alignItems="center" gap={2} xs={12}>
                {isLoading || isFetching ? (
                  <Skeleton animation="wave" width="100%" height="100px" />
                ) : (
                  <>
                    <Rating
                      name="simple-controlled"
                      value={rating}
                      precision={0.5}
                      onChange={(event, newValue) => {
                        setRating(newValue as number);
                      }}
                    />
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      fontWeight="bold"
                    >
                      10 Reviews
                    </Typography>
                  </>
                )}
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" fontWeight="bold">
                  ${data?.price}
                </Typography>
              </Grid>
              <Grid item xs={12} display="flex" gap={3}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  fontWeight="bold"
                >
                  Availability
                </Typography>
                :
                <Typography
                  variant="body1"
                  color={`${data?.stock !== 0 ? "primary" : "textSecondary"}`}
                  fontWeight="bold"
                >
                  {data?.stock !== 0 ? "In Stock" : "Not available"}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider variant="fullWidth" />
              </Grid>
              <Grid gap={3} item container display="flex" xs={12}>
                {colors.map((color) => (
                  <Grid item key={color}>
                    <Box
                      sx={{
                        height: "30px",
                        width: "30px",
                        backgroundColor: `${color}`,
                        borderRadius: "50%",
                        outline: `2px solid ${
                          selectedColor === color ? color : "transparent"
                        }`,
                        transition: "border 0.3s ease",
                        cursor: "pointer",
                      }}
                      onClick={() => handleColorClick(color)}
                    />
                  </Grid>
                ))}
              </Grid>
              <Grid item container spacing={3} xs={12}>
                <Grid item>
                  <Button variant="contained">
                    <Typography
                      sx={{ px: "20px", py: "10px" }}
                      color="white"
                      variant="body2"
                      fontWeight="bold"
                      textTransform="none"
                    >
                      Select Options
                    </Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <IconButton
                    sx={{ border: "1px solid #E8E8E8", bgcolor: "#fff" }}
                  >
                    <FavoriteBorderOutlined />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    sx={{ border: "1px solid #E8E8E8", bgcolor: "#fff" }}
                  >
                    <ShoppingCartOutlined />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    sx={{ border: "1px solid #E8E8E8", bgcolor: "#fff" }}
                  >
                    <Visibility />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <ProductsList category={data?.category} />
        </Grid>
      </Box>
    </Layout>
  );
};

export default Product;
