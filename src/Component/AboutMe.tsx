import React from "react"
import gsap from "gsap"

const About: React.FC = () => {
    return(
        <>
            <div className="h-screen w-screen bg-black flex justify-center mt-10 lg:mt-40 lg:flex-row">
                <h1 className="select-none text-orange-200 text-2xl font-extrabold lg:font-bold lg:text-5xl">About Me!</h1>
                <div className="h-32 w-32 border-solid">
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export default About;