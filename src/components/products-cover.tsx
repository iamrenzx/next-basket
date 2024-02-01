import ImageText from "@/components/image-text";
import Layout from "@/components/layout";
import { Grid } from "@mui/material";
import React from "react";

const ProductsCover = () => {
  return (
    <Grid container px={{ xl: 25, md: 10, xs: 5 }} py={10} spacing={3}>
      <Grid item xs={12} md={4}>
        <ImageText src={"/images/card-cover-1.jfif"} height="600px" />
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ImageText src={"/images/card-cover-2.jfif"} height="285px" />
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageText height="300px" src={"/images/card-cover-3.jfif"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageText height="300px" src={"/images/card-cover-4.jfif"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductsCover;
