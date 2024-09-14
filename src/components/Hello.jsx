import React, { useState } from "react";
import Nav from "./Nav";

function Hello() {
  const [hello, sethello] = useState(["h","e","l","l","o"]);

  return (
    <>
      <Nav />
      <div className="flex mt-10 items-end justify-center h-[87%] overflow-hidden bg-[#151414] text-[#F3C77C]">
        {hello.map((item, index) => {
          return (
            <h1 key={index} className="text-[41vw] h-full leading-none my-10 truncate tracking-tight">
              <span className="font-[900] ">{item}</span>
            </h1>
          );
        })}
      </div>
    </>
  );
}

export default Hello;
 