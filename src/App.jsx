import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marques from "./components/Marques";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const [loading, setLoading] = useState(true);
  const mainContentRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const timeline = gsap.timeline({
        onComplete: () => setLoading(false),
      });

      timeline
        .to(".preloader", {
          opacity: 0,
          duration: 0.6,
          ease: "circ.inOut",
          x: -1000,
        })
        .to(mainContentRef.current, {
          opacity: 1,
          duration: 1.3,
        });
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className="w-full bg-zinc-900 text-white overflow-x-hidden">
      {loading && (
        <div className="preloader bg-black fixed inset-0 flex items-center justify-center">
          <Preloader />
        </div>
      )}
      <div
        className="main-content w-full h-full px-5"
        ref={mainContentRef}
        style={{ opacity: 0 }}
      >
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marques />
        <Cards />
        <Footer />
      </div>
    </div>
  );
};

export default App;
