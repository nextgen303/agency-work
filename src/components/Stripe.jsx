import React from "react";

function Stripe({ val }) {
  return (
    <div className="px-6 py-4 border flex flex-shrink-0 gap-8 items-center justify-between w-[250px] overflow-hidden">
      <img src={val.url} alt="" className=" w-[110px] object-contain" />
      <span className="font-semibold text-xl text-white">{val.number}</span>
    </div>
  );
}

export default Stripe;
