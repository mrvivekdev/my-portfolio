import React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Image from '../assets/IMG_20240819_204056_373.webp'

const About: React.FC = () => {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{
        gsap.from("#ScrollTraggerImage",{
            y: 1000,
            duration: 2,
            delay: .5,
            // opacity: 0,
            scrollTrigger:{
                trigger:"#ScrollTragger",
                scroller: "body",
                scrub:2,
                // markers: true,
                start: "top -30%",
                end: "top 20%",
            }
        })
    })

    return(
        <>
            <div id="ScrollTragger" className="h-screen w-screen bg-black flex justify-evenly items-center flex-col pt-0 overflow-x-hidden overflow-y-hidden">
                <h1 id="ScrollTraggerImage" className="select-none text-orange-200 text-2xl font-extrabold mt-10 lg:font-bold lg:text-5xl">About Me!</h1> 
                <div className="h-full w-full bg-black flex flex-col justify-evenly lg:flex-row pt-0 mt-20 ml-24 mr-0 lg:mt-48">
                    <div id="ScrollTraggerImage" className="h-72 w-72 border-8 border-solid border-orange-200 rounded-3xl lg:h-3/5 lg:w-1/4">
                        <img src={Image} alt="MyImage" className="h-full w-full p-0 lg:h-full lg:w-full rounded-2xl"/>
                    </div>
                    <div id="ScrollTraggerImage" className="h-72 w-72 lg:h-2/4 lg:w-1/4 mt-10 lg:mt-8 ml-4">
                        <span className="select-none text-l lg:text-4xl font-serif font-extrabold text-orange-200">
                            Hi, I'm Vivek, a passionate and results-driven full-stack developer with a knack for building robust, user-centric web applications. With expertise in front-end and back-end technologies, I craft seamless digital experiences tailored to meet diverse needs.
                        </span>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default About;

