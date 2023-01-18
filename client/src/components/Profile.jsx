import React from 'react';
import me from '.././assets/New_me.jpg';
import { useTypewriter, Cursor} from 'react-simple-typewriter';
import { motion } from "framer-motion";
import TrackingText from './styled_components/TrackingText';
import { HashLink as Link } from 'react-router-hash-link';


const Profile = () => {

    const [text, count] = useTypewriter({
        words: ["Hi, my name is Bobby Nemeth",
        "I love using React { useReact }", 
        "I hope you enjoy my portfolio!"],
        loop:"true"
    })

  return (
    <section id="profile" className="h-screen w-full sm:w-3/4 flex flex-col gap-32 justify-center my-10">
        <div className='relative'>
            <motion.img 
                initial={{ 
                y: -200,
                opacity: 0
                }}
                transition={{ duration: 1}}
                whileInView={{ opacity: 1, y: 0}}
                src={me} 
                alt="profile pic"
                className="h-48 w-48 rounded-full shadow-3xl z-10 object-cover"/>
            <div className="absolute top-[-2%] border border-gray-500 rounded-full h-48 w-48 animate-ping"></div>
            <div className="absolute left-[-50%] top-[-50%] border border-gray-500 rounded-full h-96 w-96 animate-pulse"></div>
            <div className="hidden lg:block absolute left-[-153%] top-[-150%] border border-gray-500 rounded-full h-[800px] w-[800px] animate-pulse"></div>
        </div>
        <div className="text-center z-10">
            <TrackingText>Full Stack Developer</TrackingText>
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl">{text}<Cursor cursorStyle='_'/></h1>
            <div >
                <Link className='m-2 hover:text-slate-500' to="#about">About</Link>
                <Link className='m-2 hover:text-slate-500' to="#skills">Skills</Link>
                <Link className='m-2 hover:text-slate-500' to="#projects">Projects</Link>
                <Link className='m-2 hover:text-slate-500' to="#contact">Contact Me</Link>
            </div>
        </div>
    </section>
  )
}

export default Profile