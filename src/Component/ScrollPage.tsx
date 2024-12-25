import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'
import React from 'react'

const Scroll: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{
        gsap.to("#ScrollText",{
            transform:"translateX(-45%)",
            scrollTrigger:{
                trigger:"#ScrollTragger",
                scroller: "body",
                scrub:1,
                // markers: true,
                start:"top 0%",
                end:"top -100%",
                pin:true,
            }
        })
    })

  return (
    <>
        <div id='ScrollTragger' className='bg-black w-screen h-screen flex justify-center items-center'>
            <div className='bg-orange-200 h-full w-full overflow-x-hidden overflow-y-hidden flex justify-center items-center p-0'>
                <h1 id='ScrollText' className='select-none text-black font-black text-[50vw] whitespace-nowrap lg:text-[45vw] lg:mb-40'>
                    .............................. I'm Vivek Kathrotiya.
                </h1>
            </div>
        </div>
    </>
  )
}

export default Scroll;