import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marques from "./components/Marques";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full bg-zinc-900 text-white overflow-hidden">
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marques />
        <Cards />
        <Footer />
    </div>
  );
};

export default App;
