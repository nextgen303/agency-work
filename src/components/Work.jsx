import React, { useState, useEffect } from "react";
import { useScroll } from "framer-motion";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://i.pinimg.com/564x/31/3b/68/313b68ed8389c61b6808b402f638dc0a.jpg",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/564x/b7/d9/18/b7d9187c39135e54a9d81f8bade436ba.jpg",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/originals/a3/a1/64/a3a164037f2750bb3628325fc5b23dce.gif",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/564x/38/98/21/389821b369f00f11dd7bd4e81b1cbf4f.jpg",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/564x/21/89/81/218981cf77f1a0fd22d7ae0d274ea623.jpg",
      top: "63%",
      left: "42%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/564x/51/bf/4b/51bf4bf583c232a4f8ebac82d234515c.jpg",
      top: "69%",
      left: "53%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((data) => {
      function imagesShow(arr) {
        setImages((prev) =>
          prev.map((item, index) =>
            arr.indexOf(index) === -1
              ? { ...item, isActive: false }
              : { ...item, isActive: true }
          )
        );
      }

      switch (Math.floor(data * 100)) {
        case 0:
          imagesShow([]);
          break;
        case 1:
          imagesShow([0]);
          break;
        case 3:
          imagesShow([0, 1]);
          break;
        case 4:
          imagesShow([0, 1, 2]);
          break;
        case 5:
          imagesShow([0, 1, 2, 3]);
          break;
        case 6:
          imagesShow([0, 1, 2, 3, 4]);
          break;
        case 8:
          imagesShow([0, 1, 2, 3, 4, 5]);
          break;
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="w-full pt-10">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none font-bold select-none text-zinc-100 mt-1">
          work
        </h1>

        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-[400px] rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
