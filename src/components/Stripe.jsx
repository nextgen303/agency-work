import React from "react";

function Stripe({val}) {
  return (
    <div className="w-[17%] px-4 py-4 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex items-center justify-between gap-8">
      <img src={val.url} alt="" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
};

export default Stripe;
