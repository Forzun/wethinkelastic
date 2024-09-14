import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";

function page3() {
  const box = useRef(null);

  useGSAP(() => {
      gsap.from("span", {
        y: 170,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { 
            trigger:"span", 
            start: "top 60%",
            end: "top -500%",
        }
      });
    },
    { scope: box }
  );

  return (
    <div className="text w-full min-h-screen bg-[#151414] pt-28 ">
      <div ref={box} className="w-full h-full text-[#E7CFB1] px-20">
        <p
          id="text1"
          className="w-fit h-[30vh] text-[13.5vw] flex gap-10 font-semibold overflow-hidden items-center"
        >
          <span className="font-custom3 font-[300] italic text-[11.5vw]">
            nous
          </span>
          <span className="uppercase font-semibold">aidons</span>
        </p>
        <p
          id="text2"
          className=" w-fit h-[30vh] text-[13.5vw] flex gap-10 uppercase font-semibold overflow-hidden items-center pb-10 tracking-tight"
        >
          <span>les</span> <span></span> <span>marques</span>
        </p>
        <p
          id="text3"
          className=" w-full h-[27vh]  text-[13.5vw] flex gap-10 uppercase justify-end font-semibold overflow-hidden items-center pb-10 tracking-tight "
        >
          <span className="lowercase font-custom3 italic text-[11.5vw] ">
            à
          </span>
          <span>grandir</span>
        </p>
        <p
          id="text4"
          className=" w-full max-h-[25vh] text-[13.5vw] flex gap-10 uppercase justify-start font-semibold overflow-hidden items-center tracking-tight "
        >
          <span>plus vite</span>
          <span className=" w-[20vw] h-[20vh] ml-20 mt-10 text-[16px] font-[400] tracking-normal flex items-end ">
            grâce à un Storytelling impactant une identité visuelle forte des
            interfaces digitales ultra fluides
          </span>
        </p>
      </div>
    </div>
  );
}

export default page3;
