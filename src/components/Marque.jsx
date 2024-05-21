import React from "react";

function Marque({ imagesurl }) {
  return (
    <div className="flex w-full py-7 gap-20 whitespace-nowrap overflow-hidden">
      {imagesurl.map((url, index) => (
        <img key={index} src={url} className="w-[9vw] flex-shrink-0"/>
      ))}
    </div>
  );
}

export default Marque;
