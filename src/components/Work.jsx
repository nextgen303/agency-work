import React from "react";

const Work = () => {
  var images = [
    {
      url: "https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      top: "50%",
      left: "50%",
      isActive: true,
    },
    {
      url: "https://images.pexels.com/photos/12900346/pexels-photo-12900346.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://images.pexels.com/photos/9895035/pexels-photo-9895035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://images.pexels.com/photos/1209982/pexels-photo-1209982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://images.pexels.com/photos/2475266/pexels-photo-2475266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      top: "63%",
      left: "42%",
      isActive: false,
    },
    {
      url: "https://images.pexels.com/photos/8147578/pexels-photo-8147578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      top: "69%",
      left: "53%",
      isActive: false,
    },
  ];
  return (
    <div className="w-full pt-10">
      <div className="  relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none font-bold select-none text-zinc-100 mt-1">
          work
        </h1>

        <div className="absolute top-0 w-full h-full">
            {images.map((elem, index) =>(elem.isActive && (
               <img className="absolute w-64 rounded-lg -translate-x-[50%] -translate-y-[50%]" style={{top: elem.top, left:elem.left}} src={elem.url} alt="" />
            )))}
        </div>
      </div>
    </div>
  );
};

export default Work;
