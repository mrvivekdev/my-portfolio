import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React from 'react'

const Landing: React.FC = () => {

    useGSAP(()=>{
        gsap.from('#H1Gsap', {
            opacity: 0,
            duration: 1,
            delay: .6,
        }) 

        gsap.from('#MainText', {
            x: -100,
            opacity: 0,
            duration: 1,
            delay: .6,
            stagger:0.5
        })
    })

  return (
    <>
        <div className='flex justify-center items-center w-full h-20 '>
            <h1 className='select-none text-2xl font-bold text-orange-200 lg:text-2xl cursor-pointer line-through' id='H1Gsap'>VIVEK.DEV</h1>
        </div>
        <div className='flex items-center w-full h-screen'>
            <div className='w-1/3 h-3/5 ml-[20px] lg:ml-10 flex flex-col justify-center '>
                <span className='select-none text-5xl lg:text-8xl font-serif font-extrabold text-orange-200' id='MainText'>
                    "Hey,                   
                </span> 
                <span className='select-none text-5xl lg:text-8xl font-serif font-extrabold text-orange-200' id='MainText'>
                    Welcome!                   
                </span> 
                <span className='select-none text-5xl lg:text-8xl font-serif font-extrabold text-orange-200' id='MainText'>
                    Let’s Build               
                </span>
                <span className='select-none text-5xl lg:text-8xl font-serif font-extrabold text-orange-200' id='MainText'>
                    Future of Web Development Together."                
                </span>
            </div>
        </div>
    </>
  )
}
// Welcome! Let’s Build the Future of Web Development Together.

export default Landing;