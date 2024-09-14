import React from "react";
import { gsap } from "gsap";

function Project() {
  const hover = () => {
    gsap.to(".hovering", {
      width: "25vw",
      height: "26vh",
      rotate: "-15deg",
      duration: 0.3,
      y: "-14",
    });
  };

  const leaveHovering = () => {
    gsap.to(".hovering", {
      width: "25vw",
      height: "20vh",
      rotate: "0deg",
      duration: 0.3,
    });
  };

  return (
    <div className="w-full h-[35vh] bg-[#151414] ">
      <div className="w-full h-full flex justify-center items-start relative ">
        <div
          onMouseEnter={() => hover()}
          onMouseLeave={() => leaveHovering()}
          className="w-[25vw] hovering h-[20vh] cursor-pointer rounded-[50%] border-[1px] flex items-center justify-center flex-col border-[#E7CFB1] "
        ></div>
        <div
          onMouseEnter={() => hover()}
          onMouseLeave={() => leaveHovering()}
          className="absolute text-center top-9 m-auto tracking-tight leading-5 text-[#E7CFB1] text-[3vh] font-[400] cursor-pointer uppercase "
        >
          <h1>Découvrez tous</h1>
          <h1>nos projets</h1>
        </div>
      </div>
    </div>
  );
}

export default Project;
