import React, { useEffect, useRef } from "react";
import video from "../video/scrollvideo.mp4";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Scalevideo() {
    const box = useRef(null);

   useGSAP(() => { 
     gsap.to(".video",{ 
        width:"100%",
        scrollTrigger:{ 
            trigger: ".video video", 
            start:"top 100%", 
            end:"top 0%", 
            scrub:1.5,
        }
     })
   },{scope: box})

    
  return (
    <div ref={box} className="text-[#F3C77C] w-full min-h-full bg-[#151414] ">
      <div className="w-full h-fit flex justify-center">
        <h1 className="text-[37px] font-[400] w-[30vw] h-[24vh] text-center mt-3 uppercase tracking-tighter leading-10 ">Nous sommes l'équipe we think elastic</h1>
      </div>
        
      <div className="video min-h-full w-[30%] m-auto ">
        <video muted autoPlay loop src={video}></video>
      </div>
    </div>
  );
}

export default Scalevideo;
