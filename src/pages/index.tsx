import Layout from "@/components/layout";
import ProductsCover from "@/components/products-cover";
import ProductsList from "@/components/products-list";
import React from "react";

const Home = () => {
  return (
    <Layout>
      <ProductsCover />
      <ProductsList />
    </Layout>
  );
};

export default Home;
