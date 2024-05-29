import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: true,
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
    },
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
    },
  ];

  const hoverColors = [
    "hover:bg-zinc-800",
    "hover:bg-[#122533]",
    "hover:bg-[#161825]",
    "hover:bg-[#0D1720]",
    "hover:bg-[#86C8D4]",
    "hover:bg-[#02956D]",
  ];

  const images = [
    "https://i.pinimg.com/564x/06/a1/91/06a19135a62ae1a35e317ebfb20f347c.jpg",
    "https://i.pinimg.com/564x/3c/03/c4/3c03c4b79ab22faedcc46c0eb30d4b59.jpg",
    "https://i.pinimg.com/564x/02/ed/95/02ed95f544aec6c82caf3cdf816205ac.jpg",
    "https://i.pinimg.com/564x/8c/1f/db/8c1fdb91d7970c3c7274ae2ecd1e7ecc.jpg",
    "https://i.pinimg.com/564x/34/6c/aa/346caa9c3410e009dd260fe59d55e936.jpg",
    "https://i.pinimg.com/564x/91/94/38/9194388b2f9fc6b7db913789a30c3b3c.jpg",
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23); // Ensure each product occupies 23 rem height
  };

  return (
    <div className="mt-24 relative">
      {products.map((val, index) => (
        <Product
          key={index}
          val={val}
          mover={mover}
          count={index}
          hoverColor={hoverColors[index]}
        />
      ))}
      <div className="w-full h-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-53%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }}
          className="window absolute w-[32rem] h-[23rem] left-[44%] overflow-hidden rounded-lg"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }}
              className="w-full h-full overflow-hidden"
            >
              <img
                className="w-full h-full object-cover"
                src={`${image}`}
                alt=""
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
