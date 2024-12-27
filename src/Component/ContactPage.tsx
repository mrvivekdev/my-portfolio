import React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Github from '../assets/github.png'
import Email from '../assets/email.png'
import Instagram from '../assets/instagram.png'
import Linkdine from '../assets/message.png'
import Twitter from '../assets/twitter.png'

const Contact:React.FC = () => {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{
        gsap.from("#ScrollTraggerConcate",{
            y: 1000,
            duration: .8,
            delay: 0,
            opacity: 0,
            stagger:0.2,
            scrollTrigger:{
                trigger:"#ScrollMain",
                scroller: "body",
                // scrub:2,
                // markers: true,
                start: "top 45%",
                // end: "top 30%",
            }
        })
    })


    return(
        <>
            <div id="ScrollMain" className="w-full h-full screen bg-black flex flex-col justify-evenly items-center overflow-hidden">
                <h1 className="select-none text-orange-200 text-2xl font-extrabold mt-10 mb-20 lg:font-bold lg:text-5xl">Contact</h1>

                <div className="flex flex-row justify-evenly mt-10 mb-28 h-full w-full">
                    <div className="flex flex-row w-11/12 lg:w-3/4 h-4/6 justify-evenly mt-10 mb-28 ">
                        <a id="ScrollTraggerConcate" className="underline font-normal" href="https://github.com/mrvivekdev"><img className="invert h-[50px] lg:h-[80px]" src={Github} alt="" /></a>
                        <a id="ScrollTraggerConcate" className="underline font-normal" href="https://www.linkedin.com/in/vivek-kathrotiya-2b3898325/"><img className="invert h-[50px] lg:h-[80px]" src={Linkdine} alt="" /></a>
                        <a id="ScrollTraggerConcate" className="underline font-normal" href="https://x.com/TheVivekDev"><img className="invert h-[50px] lg:h-[80px]" src={Twitter} alt="" /></a>
                        <a id="ScrollTraggerConcate" className="underline font-normal" href="https://www.instagram.com/ft_teddy/"><img className="invert h-[50px] lg:h-[80px]" src={Instagram} alt="" /></a>
                        <a id="ScrollTraggerConcate" className="underline font-normal" href="mailto:vivekkathrotiya911@gmail.com"><img className="invert h-[50px] lg:h-[80px]" src={Email} alt="" /></a>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;