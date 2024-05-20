import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor"; // Import the custom cursor component
import { gsap } from "gsap";

const App = () => {
  const [loading, setLoading] = useState(true);
  const mainContentRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // Transition from preloader to main content
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
  }, []);

  return (
    <div className="relative w-full h-screen bg-zinc-900 text-white overflow-y-hidden">
      {/* Add the custom cursor component */}
      <CustomCursor />

      {loading && (
        <div className="preloader bg-black fixed inset-0 flex items-center justify-center">
          <Preloader />
        </div>
      )}
      <div
        className="main-content w-full h-full"
        ref={mainContentRef}
        style={{ opacity: 0 }}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default App;
