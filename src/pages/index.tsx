import Layout from "@/components/layout";
import { useGetProductsQuery } from "@/services/products/productApi";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  const displayedProducts = data?.products.slice(0, 4) || [];

  if (!data || isLoading) {
    return null;
  }

  return (
    <Layout>
      <Grid container px={25} py={10} spacing={3}>
        <Grid item xs={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              maxHeight: 200,
            }}
          >
            {/* Image */}
            <img
              src={displayedProducts[0].thumbnail}
              alt={displayedProducts[0].description}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Maintain aspect ratio and fill container
              }}
            />
            <CardContent>
              {/* Product Count */}
              <Typography
                variant="body1"
                fontWeight="bold"
                color="success.main"
              >
                {`${data?.products.length} Items`}
              </Typography>

              {/* Category */}
              <Typography
                sx={{ textTransform: "uppercase" }}
                fontWeight="bold"
                variant="h3"
              >
                {displayedProducts[0].category}
              </Typography>

              {/* Read More Button */}
              <Button
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
                variant="text"
                color="inherit"
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  maxHeight: 200,
                }}
              >
                {/* Image */}
                <img
                  src={displayedProducts[1].thumbnail}
                  alt={displayedProducts[1].description}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Maintain aspect ratio and fill container
                  }}
                />
                <CardContent>
                  {/* Product Count */}
                  <Typography variant="subtitle1" color="textSecondary">
                    {`${data?.products.length} Items`}
                  </Typography>

                  {/* Category */}
                  <Typography
                    sx={{ textTransform: "uppercase" }}
                    variant="subtitle2"
                    color="primary"
                  >
                    {displayedProducts[0].category}
                  </Typography>

                  {/* Read More Button */}
                  <Button
                    sx={{ textTransform: "none" }}
                    variant="text"
                    color="primary"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  maxHeight: 200,
                }}
              >
                {/* Image */}
                <img
                  src={displayedProducts[2].thumbnail}
                  alt={displayedProducts[2].description}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Maintain aspect ratio and fill container
                  }}
                />
                <CardContent>
                  {/* Product Count */}
                  <Typography variant="subtitle1" color="textSecondary">
                    {`${data?.products.length} Items`}
                  </Typography>

                  {/* Category */}
                  <Typography
                    sx={{ textTransform: "uppercase" }}
                    variant="subtitle2"
                    color="primary"
                  >
                    {displayedProducts[0].category}
                  </Typography>

                  {/* Read More Button */}
                  <Button
                    sx={{ textTransform: "none" }}
                    variant="text"
                    color="primary"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  maxHeight: 200,
                }}
              >
                {/* Image */}
                <img
                  src={displayedProducts[3].thumbnail}
                  alt={displayedProducts[3].description}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Maintain aspect ratio and fill container
                  }}
                />
                <CardContent>
                  {/* Product Count */}
                  <Typography variant="subtitle1" color="textSecondary">
                    {`${data?.products.length} Items`}
                  </Typography>

                  {/* Category */}
                  <Typography
                    sx={{ textTransform: "uppercase" }}
                    variant="subtitle2"
                    color="primary"
                  >
                    {displayedProducts[0].category}
                  </Typography>

                  {/* Read More Button */}
                  <Button
                    sx={{ textTransform: "none" }}
                    variant="text"
                    color="primary"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
