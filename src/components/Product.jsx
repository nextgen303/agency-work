import React from "react";
import Button from "./Button";

function Product({ val, mover, count, hoverColor }) {
  return (
    <div className={`w-full py-20 h-[23rem] text-white transition duration-700 ${hoverColor}`}>
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-6xl capitalize">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-5">
            {val.live && <Button />}
            {val.case && <Button title="Github" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
