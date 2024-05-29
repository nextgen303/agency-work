import React from "react";
import { motion } from "framer-motion";
import Stripe from "./Stripe";

function Striperun({ items, direction = "left" }) {
  const xValue = direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"];

  return (
    <div className="py-4 relative w-full">
      <motion.div
        className="flex items-center justify-between w-full"
        animate={{ x: xValue }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15,
        }}
      >
        {[...items, ...items].map((val, index) => (
          <Stripe key={index} val={val} />
        ))}
      </motion.div>
    </div>
  );
}

export default Striperun;
