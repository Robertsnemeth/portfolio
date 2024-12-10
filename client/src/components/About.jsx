import React from 'react';
import HeroImg from '../assets/hero.JPG'
import TrackingText from './styled_components/TrackingText';
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      id="about"
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full sm:w-3/4 min-h-screen flex flex-col gap-8 justify-center border border-l-0 border-r-0 overflow-hidden relative">
      <TrackingText>about</TrackingText>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-10 p-10'>
        <motion.img
          initial={{ 
            x: 100,
            opacity: 0
            }}
          transition={{ duration: 1}}
          whileInView={{ opacity: 1, x: 0}}
          src={HeroImg} 
          alt="hero image" 
          className='rounded w-72 lg:w-96 z-10'/>
        <div className=' px-1'>
          <p className=" text-base lg:text-lg text-center z-10">
            Hey everyone, my name is Robert Nemeth, I go by Bobby. 
            I am a Full Stack Developer based out of Tacoma, WA. Ive built full-stack projects in Python, Java and MERN but I am particularily passionate about React/Next.js. 
            I love pixel perfect design, clean interfaces and thoughtful UI/UX. Being able to create responsive experiences for clients is what draws me to development. 
            Looking for any Junior or Associate Developer oppotunities.
          </p>
      </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-48 bg-gray-300 opacity-10 -skew-y-12"></div>
      </div>
    </motion.div>
  )
}

export default About