import { RootState } from "@/app/store";
import { useGetProductsQuery } from "@/services/products/productApi";
import { setProducts, addProducts } from "@/services/products/productSlice";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsList = () => {
  const limitPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const theme = useTheme();

  const { data, isLoading, isFetching } = useGetProductsQuery({
    skip: currentPage,
    limit: limitPerPage,
  });

  const products = useSelector((state: RootState) => state.product.products);
  const totalProducts = data?.total || 0;

  const handleLoadMore = () => {
    const offset = currentPage + limitPerPage;
    setCurrentPage(offset);
  };

  // Update the store when data changes
  useEffect(() => {
    if (data) {
      if (currentPage === 0) {
        dispatch(setProducts(data.products));
      } else {
        dispatch(addProducts(data.products));
      }
    }
  }, [data, dispatch]);

  return (
    <Grid container px={{ xl: 35, md: 10, xs: 5 }} py={10} spacing={3}>
      <Grid container justifyContent="center" textAlign="center">
        <Grid item xs={12}>
          <Typography color="textSecondary" variant="h6">
            Featured Products
          </Typography>
          <Typography fontWeight="bold" variant="h5">
            BESTSELLER PRODUCTS
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Problems trying to resolve the conflict between{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        textAlign="center"
        spacing={5}
        mt={7}
      >
        {products.map((item, index) => {
          const { title, category, price, discountPercentage } = item;
          const itemDiscountedPrice =
            price - price * (discountPercentage / 100);
          const roundedItemPrice = Math.round(itemDiscountedPrice * 100) / 100;

          return (
            <Grid key={item.id + index} item xs={12} md={2.4}>
              <Box
                component="img"
                src={item.thumbnail}
                sx={{
                  width: "100%",
                  height: "238px",
                  objectFit: "cover",
                  [theme.breakpoints.down("md")]: {
                    height: "360px",
                  },
                }}
                alt={`product item ${index}`}
              />
              <Typography mt={5} variant="body1" fontWeight="bold">
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                textTransform="capitalize"
                fontWeight="bold"
              >
                {category}
              </Typography>
              <Typography
                sx={{
                  mr: "5px",
                }}
                component="span"
                variant="body1"
                color="textSecondary"
                textTransform="capitalize"
                fontWeight="bold"
              >
                ${price}
              </Typography>
              <Typography
                component="span"
                variant="body1"
                color="secondary"
                textTransform="capitalize"
                fontWeight="bold"
              >
                ${roundedItemPrice}
              </Typography>
            </Grid>
          );
        })}
        {products.length < totalProducts && (
          <Button
            variant="outlined"
            onClick={handleLoadMore}
            color="primary"
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              padding: "15px 40px 15px 40px",
              mt: 10,
            }}
            disabled={isLoading || isFetching}
          >
            {isLoading || isFetching ? (
              <>
                <CircularProgress sx={{ mx: 3 }} />
                Loading...
              </>
            ) : (
              "Load More Products"
            )}
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default ProductsList;
