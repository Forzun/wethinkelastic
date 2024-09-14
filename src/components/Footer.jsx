import React from "react";
import gsap from "gsap";

function Footer() {
  const move = () => {
    gsap.from("span", {
      width: "0%",
    });
  };

  return (
    <div className="w-full h-[180vh] bg-[#E7CFB1]">
      <div className="w-[80%] h-[90%] flex flex-col items-center m-auto">
        <div className="content w-full h-[40%] text-[80px] uppercase flex flex-col items-center tracking-tighter leading-[70px] justify-center pt-10 text-[#151414]  ">
          <h1>Vous avez un beau</h1>
          <h1>projet ? parlons-en</h1>
          <h1 className="w-fit flex items-end">
            autour d'un{" "}
            <span
              onMouseEnter={() => {}}
              className="w-fit  h-[4.7px] flex items-end pb-1 bg-[#151414] "
            >
              Bon café
            </span>
          </h1>
        </div>
        <div className="w-[38%] h-[48vh] overflow-hidden relative">
  <img className="w-[80%] h-full object-cover absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]" src="https://wethinkelastic.com/assets/images/cafe.gif" alt="" />
</div>
      </div>
    </div>
  );
}

export default Footer;
