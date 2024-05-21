import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title = "Get Started"}) => {
  return (
    <div className="w-36 bg-zinc-100 px-4 py-2 text-black rounded-full flex items-center justify-between">
      <a href="#">
        <span className="text-sm font-bold text-zinc-700">{title}</span>
      </a>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
