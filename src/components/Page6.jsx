import React from "react";
import creme from "../image/creme.webp";
import { gsap } from "gsap";

function Page6() {
  const mouseMove = (detail) => {
    const video1 = detail.currentTarget.getBoundingClientRect();
    const mouseElement = detail.currentTarget.querySelector(".mousemoving");

    const x = detail.clientX - video1.left - mouseElement.offsetWidth / 2;
    const y = detail.clientY - video1.top - mouseElement.offsetHeight / 2;

    gsap.to(mouseElement, {
      x: x,
      y: y,
      scale: 1,
      opacity: 1,
    });
    gsap.to(".zooming", {
      scale: 0.97,
      duration: 0.4,
    });
    gsap.to(".zooming1", {
      scale: 1.1,
    });
  };

  const leaveMouce = () => {
    gsap.to(".mousemoving", {
      scale: 0,
    });
    gsap.to(".zooming", {
      scale: 1,
      duration: 0.4,
    });
    gsap.to(".zooming1", {
      scale: 1,
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#151414] py-[5%] ">
      <div className=" w-fit m-auto h-[110vh]">
        <div
          onMouseMove={(e) => mouseMove(e)}
          onMouseLeave={() => leaveMouce()}
          className="w-[67vw] h-[95vh] zooming m-auto overflow-hidden relative "
        >
          <div className="w-full h-full ">
            <div
              className={`mousemoving absolute w-[75px] flex justify-center z-50 opacity-0 overflow-hidden rounded-full items-center h-[75px] bg-[#151414]`}
            >
              <i className=" ri-arrow-right-line  text-4xl "></i>
            </div>
            <img className="m-auto zooming1 " src={creme} alt="" />
          </div>
        </div>
        <div id="text" className=" mt-2">
          <h4 className="uppercase font-semibold text-md tracking-tight">
            beev
          </h4>
          <p className="text-lg font-[400] tracking-tight ">
            {" "}
            Branding, Digital, Stratégie
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page6;
