import { motion } from "framer-motion";
import React from "react";

function Marque({ imagesurl, diraction }) {
  return (
    <div className="flex w-full py-7 overflow-hidden">
      <motion.div
        initial={{ x: diraction === "left" ? "0" : "-100%" }}
        animate={{x: diraction === "left" ? "-100%" : "0"}}
        transition={{ease: "linear", duration: 20, repeat: Infinity}}
        className="flex flex-shrink-0 gap-40 py-3 pr-40"
      >
        {imagesurl.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: diraction === "left" ? "0" : "-100%" }}
        animate={{x: diraction === "left" ? "-100%" : "0"}}
        transition={{ease: "linear", duration: 20, repeat: Infinity}}
        className="flex flex-shrink-0 gap-40 py-3 pr-40"
      >
        {imagesurl.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
    </div>
  );
}

export default Marque;
