import React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skills:React.FC = () => {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{
        gsap.from("#ScrollTraggerText",{
            y: 100,
            duration: 2,
            delay: 1,
            opacity: 0,
            stagger:3,
            scrollTrigger:{
                trigger:"#ScrollTragger",
                scroller: "body",
                scrub:2,
                // markers: true,
                start: "top -160%",
                // end: "top 20%",
            }
        })
    })


    return(
        <>
            <div id="ScrollTragger" className="h-full w-full bg-orange-200 flex flex-col justify-center lg:justify-evenly items-center lg:flex-row overflow-x-hidden overflow-y-hidden">
                <div id="ScrollTraggerText" className="flex flex-col justify-center items-center p-4 lg:h-3/4 lg:w-1/4 lg:mt-48 lg:mb-48">
                    <h1 className="text-black text-5xl font-bold mt-10">Frontend</h1>
                    <span className="text-black font-medium pl-2 pt-5 lg:text-lg">
                        As a frontend developer, I specialize in creating responsive, interactive, and user-friendly websites using HTML5, CSS3, and JavaScript. I have extensive experience with React.js for building scalable applications and TypeScript for type-safe development. I leverage Tailwind CSS for efficient and maintainable styling and ensure mobile-first, responsive designs for seamless experiences across devices. My skills also include API integration, version control with Git, and frontend performance optimization techniques like lazy loading and code splitting. By combining these skills, I deliver high-quality, fast-loading web applications with a focus on user experience.
                    </span>
                </div>

                <div id="ScrollTraggerText" className="flex flex-col justify-center items-center p-4 lg:h-3/4 lg:w-1/4 ">
                    <h1 className="text-black text-5xl font-bold mt-10">Backend</h1>
                    <span className="text-black font-medium pl-2 pt-5 lg:text-lg">
                        As a backend developer, I am building expertise in using JWT for secure authentication, Express.js for building scalable web applications, and Node.js for server-side development. I work with MongoDB for efficient data storage and management, utilizing Mongoose for database operations. I am also gaining hands-on experience with Multer for file uploads, CORS for enabling cross-origin requests, and developing APIs to facilitate seamless communication between the frontend and backend. I focus on creating secure, efficient, and scalable backend solutions for modern web applications.
                    </span> 
                </div>

                <div id="ScrollTraggerText" className="flex flex-col justify-center items-center p-4 lg:h-3/4 lg:w-1/4 ">
                    <h1 className="text-black text-5xl font-bold mt-10">Tools</h1>
                    <span className="text-black font-medium pl-2 pt-5 lg:text-lg">
                    I am proficient in a range of tools and libraries that streamline development and improve application functionality. On the backend, I use Node.js and Express.js to build scalable server-side applications, with MongoDB and Mongoose for efficient database management. For secure user authentication, I implement JWT and bcrypt. I handle file uploads using Multer and manage cross-origin requests with CORS. I rely on Postman for API testing and utilize K9 Testing for automated testing and quality assurance. Additionally, I use Git for version control, ensuring smooth collaboration and code management. I also leverage AI tools to enhance productivity and automate various aspects of development, improving efficiency across the board.
                    </span> 
                </div>
            </div>
        </>
    )
}

export default Skills;