import React from "react";

function Marque({ imagesurl }) {
  return (
    <div className="flex w-full py-7 gap-20 whitespace-nowrap overflow-hidden">
      {imagesurl.map((url) => (
        <img src={url} className="w-[9vw] flex-shrink-0"/>
      ))}
    </div>
  );
}

export default Marque;
