import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-3 flex items-center justify-between">
      <div className="flex items-center justify-center">
        <h3 className="text-3xl">Refocus</h3>

        <div className="navlinks flex gap-12 ml-20">
        {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
          elem.length === 0 ? (
            <span className="w-[2px] h-7 bg-zinc-600"></span>
          ) : (
            <a key={index} className="text-sm flex items-center gap-1" href="#">
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.35em #00FF19" }}
                  className="inline-block mt-[2px] w-2 h-2 rounded-full bg-green-600"
                ></span>
              )}
              {elem}
            </a>
          )
        )}
      </div>
      </div>

        <Button />
    </div>
  );
};

export default Navbar;
