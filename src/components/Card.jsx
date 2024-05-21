import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="cardleft flex flex-col justify-between w-1/3 bg-zinc-800 p-5 rounded-lg h-[400px] hover:bg-zinc-700">
        <div className="top">
          <div className="mb-3 flex items-center justify-between">
            <h5 className=" text-sm text-zinc-300">Up next : News</h5>

            <FaArrowRightLong className="text-zinc-400" />
          </div>

          <h3 className="text-3xl w-[70%]">Insights and behind the scenes</h3>
        </div>

        <div className="bottom">
          <p className="text-zinc-500">Explore what drives our team.</p>
        </div>
      </div>

      <div className="cardright flex flex-col justify-between w-2/3 bg-zinc-800 p-5 rounded-lg h-[400px] hover:bg-[#ff8839b1]">
        <div className="top">
        <div className="mb-3 flex items-center justify-between">
            <h5 className=" text-sm text-zinc-300">Up next : News</h5>

            <FaArrowRightLong className="text-zinc-400" />
          </div>
          <h3 className="text-3xl">
            Lets get to it, <br /> together.
          </h3>
        </div>

        <div className="bottom">
          <h1 className="mb-4 text-8xl font-semibold">Start a Project</h1>

          <button className="rounded-full border-[1px] px-8 py-2 border-zinc-400">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
