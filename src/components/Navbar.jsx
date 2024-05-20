import React, { useEffect, useRef } from "react";
import Button from "./Button";
import Logo from "./Logo.";
import { gsap } from "gsap";

const Navbar = () => {
  const logoRef = useRef(null);
  const navlinksRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Show logo
    timeline.fromTo(
      logoRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8 }
    );

    // Show navlinks
    timeline.fromTo(
      navlinksRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8 }
    );

    // Show button
    timeline.fromTo(
      buttonRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8 }
    );
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-3 flex items-center justify-between">
      <div className="flex items-center justify-center">
        <div className="logo">
            <Logo />
        </div>

        <div className="navlinks flex gap-12 ml-20" ref={navlinksRef}>
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-7 bg-zinc-600"></span>
            ) : (
              <a
                key={index}
                className="text-sm flex items-center gap-1"
                href="#"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.35em #00FF19" }}
                    className="inline-block  w-[5px] h-[5px] rounded-full bg-green-600"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>

      <div ref={buttonRef}>
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
