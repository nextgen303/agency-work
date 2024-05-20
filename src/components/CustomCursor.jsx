import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      setCursorPos({ x: clientX, y: clientY });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    gsap.to(cursor, {
      x: cursorPos.x - cursor.offsetWidth / 2,
      y: cursorPos.y - cursor.offsetHeight / 2,
      duration: 0.2,
      ease: "power3.out",
    });
  }, [cursorPos]);

  const handleLinkHover = (event) => {
    const link = event.target;
    const cursor = document.querySelector(".custom-cursor");
    const cursorRect = cursor.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const dx = linkRect.left - cursorRect.left + linkRect.width / 2;
    const dy = linkRect.top - cursorRect.top + linkRect.height / 2;

    gsap.to(cursor, {
      x: cursorPos.x + dx,
      y: cursorPos.y + dy,
      scale: 1.5,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleLinkLeave = () => {
    gsap.to(".custom-cursor", { scale: 1, duration: 0.3 });
  };

  return (
    <div
      className="custom-cursor absolute w-4 h-4 bg-white rounded-full pointer-events-none mix-blend-difference z-50"
      onMouseEnter={handleLinkHover}
      onMouseLeave={handleLinkLeave}
    ></div>
  );
};

export default CustomCursor;
