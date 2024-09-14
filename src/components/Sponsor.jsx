import React, { useState } from "react";

function Sponsor() {
  const [firstText, setfirstText] = useState([
    "Positionnement",
    "Plateforme de marque ",
    "Stratégie digitale ",
    "Stratégie sociale ",
    "Content Marketing ",
  ]);
  
  const [secontText, setsecondText] = useState([ 
    "Logo",
    "Identité graphique",
    "Stratégie digitale ",
    "SIdentité graphiquee ",
    "CIdentité graphique ",
    "Création de contenu",
    "Guidelines social media",
  ])
  const [another, setAnother] = useState([ 
    "Ui disign",
    "Audit et UX desing",
    "Site vitrine",
    "site e-commerce",
    "Application Web",
    "Application Mobile",
  ])

  return (
    <div className="w-full h-[70vh] bg-[#9AC1CB] ">
      <div className="w-[90%] m-auto h-full flex justify-between">
        <div className="w-fit h-full p-8 flex flex-col leading-[28px]">
          <h4 className="text-[4vh] uppercase text-black font-semibold mb-3">
            Stratégie & Idées
          </h4>
            {firstText.map((item, index) => (
                <h4 key={index} className=" text-[1.50vw]  text-[#323c3f] ">
                  {item}
                </h4>
            ))}
        </div>
        <div className="w-fit h-full p-8 flex flex-col leading-[27px]">
          <h4 className="text-[4vh] uppercase text-black font-semibold mb-3">
          Identité de marque
          </h4>
            {secontText.map((item, index) => (
                <h4 key={index} className=" text-[1.50vw]  text-[#323c3f]">
                  {item}
                </h4>
            ))}
        </div>
        <div className="w-fit h-full p-8 flex flex-col leading-[28px] ">
          <h4 className="text-[4vh]  uppercase text-black font-semibold mb-3 ">
          Expérience digitale
          </h4>
            {another.map((item, index) => (
                <h4 key={index} className=" text-[1.50vw]  text-[#323c3f] ">
                  {item}
                </h4>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
