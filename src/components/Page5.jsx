import React, { useEffect, useRef, useState } from 'react'
import thumnail from "../video/thumnail-IEC.mp4"
import coffee from '../image/coffi.webp'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import 'remixicon/fonts/remixicon.css'
import car from '../video/car.mp4'; 
import bag from '../image/bag.webp';

function page4() {
    
    
    const moveing = (detail) => { 
        const video1 = detail.currentTarget.getBoundingClientRect();
        const mouseElement = detail.currentTarget.querySelector(".mouse");

        const x = detail.clientX - video1.left - mouseElement.offsetWidth / 2;
        const y = detail.clientY - video1.top - mouseElement.offsetHeight / 2;

            gsap.to(mouseElement, { 
                x: x,
                y: y,
                duration: 0.4, 
                scale: 1,
                opacity: 1,
            });
            gsap.to(".video1" , { 
                scale: 0.93, 
                duration: 0.4, 
            })
            gsap.to(".zoom",{ 
                scale:1.2,
            })
    }

    const leaveMoving = () => { 
        gsap.to(".mouse", { 
            scale: 0,
        });   
        gsap.to(".video1" , { 
            scale: 1, 
            duration: 0.4, 
        })
        gsap.to(".zoom",{ 
            scale:1,
        })
    }

    const imgMoveing = (detail) => { 

        const video1 = detail.currentTarget.getBoundingClientRect();
        
        const mouseElement = detail.currentTarget.querySelector(".mouse1");
    
        const x = detail.clientX - video1.left - mouseElement.offsetWidth / 2;
        const y = detail.clientY - video1.top - mouseElement.offsetHeight / 2;
    
        gsap.to(mouseElement, { 
            x: x,
            y: y,
            duration: 0.4, 
            scale: 1,
            opacity: 1, 
        });
    
        gsap.to(".img1", { 
            scale: 0.93, 
            duration: 0.4, 
        });
    
        gsap.to(".img-zoom", { 
            scale: 1.2,
        });
    }

    const leaveImgMoving = () => { 
        gsap.to(".mouse1", { 
            scale: 0,
        });   
        gsap.to(".img1" , { 
            scale: 1, 
            duration: 0.4, 
        })
        gsap.to(".img-zoom",{ 
            scale:1,
        })
    }

  return (
    <div className='h-[120vh] w-full bg-[#151414] px-10 '>
        <div className='w-full h-fit flex gap-[15vw]'>
            <div className='image1 w-[full] h-full'> 
            <div onMouseMove={(e) => moveing(e)} onMouseLeave={() => leaveMoving()}  className='video1 w-[31vw] h-fit relative overflow-hidden  '>
                <div className={`mouse absolute w-[75px] flex justify-center z-50 opacity-0 overflow-hidden rounded-full items-center h-[75px] bg-[#151414]`}>
                <i className=" ri-arrow-right-line  text-4xl "></i>
                </div>
                <video autoPlay muted loop className=' m-auto zoom' src={car} ></video>
            </div>
            <div id='text' className=' mt-3'>
                <h4 className='uppercase font-semibold text-md tracking-tight'>beev</h4>
                <p className='text-lg font-[400] tracking-tight '> Branding, Digital, Stratégie</p>
            </div>
            </div>
            <div className='image2 w-full h-full pt-[28vh] '> 
            <div onMouseMove={(e) => imgMoveing(e)} onMouseLeave={() => leaveImgMoving()}  className='img1 w-[47vw] h-fit relative overflow-hidden  '>
                <div className={`mouse1 absolute w-[75px] flex justify-center z-50 opacity-0 overflow-hidden rounded-full items-center h-[75px] bg-[#151414]`}>
                <i className=" ri-arrow-right-line  text-4xl "></i>
                </div>
                <img autoPlay muted loop className=' m-auto img-zoom' src={bag} ></img>
            </div>
            <div id='text' className='mt-3'>
                <h4 className='uppercase font-semibold text-md tracking-tight'>peugeot</h4>
                <p className='text-lg font-[400] tracking-tight '> Branding, Digital, Stratégie</p>
            </div>
            </div>
        </div>
    </div> 
  )
}

export default page4