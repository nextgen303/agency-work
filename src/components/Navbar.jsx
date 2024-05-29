import React from "react";
import Button from "./Button";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto pb-4 pt-3 flex items-center justify-between border-zinc-700 border-b-[1px]">
      <div className="flex items-center justify-center">
        <div className="logo">
          <Logo />
        </div>

        <div className="navlinks md:flex gap-12 ml-20 hidden">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-7 bg-zinc-600"></span>
            ) : (
              <a
                key={index}
                className="text-sm flex items-center gap-1"
                href="#"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.35em #00FF19" }}
                    className="inline-block  w-[5px] h-[5px] rounded-full bg-green-600"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>

      <div>
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
