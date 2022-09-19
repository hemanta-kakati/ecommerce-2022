import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProductsCategory from "../components/ProductsCategory";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ProductsCategory />
      <Outlet />
    </>
  );
};

export default Home;
