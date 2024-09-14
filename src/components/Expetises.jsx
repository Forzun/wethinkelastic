import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Expetises() {
  const ref = useRef(null);

  useGSAP(() => {
    const element = ref.current;

    gsap.to(".pin .scrollerheading", {
      duration: 1,
      xPercent: -56, 
      scrollTrigger: {
        trigger: element,
        start: "top -10%", 
        end: "bottom top", 
        scrub: 2,
      },
    });
  });

  return (
    <div className="main w-full h-[100vh] bg-[#9AC1CB] overflow-hidden font-custom">
      <div ref={ref} className="pin w-full h-full flex items-center">
        <h1 className="scrollerheading text-[#151414] text-[40vw] uppercase">
          Expetises
        </h1>
      </div>
    </div>
  );
}

export default Expetises;
