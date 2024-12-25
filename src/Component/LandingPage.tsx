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
        })
    })

  return (
    <>
        <div className='flex justify-center items-center w-full h-20 '>
            <h1 className='select-none text-2xl font-bold text-orange-200 lg:text-2xl cursor-pointer' id='H1Gsap'>VIVEK.DEV</h1>
        </div>
        <div className='flex items-center w-full h-screen'>
            <div className='w-1/3 h-3/5 ml-[130px] lg:ml-20 flex justify-center items-center'>
                <span className='select-none text-5xl lg:text-8xl font-serif font-extrabold text-orange-200' id='MainText'>
                    "Hey, Welcome! Let’s Build the Future of Web Development Together."                   
                </span> 
            </div>
        </div>
    </>
  )
}

export default Landing;