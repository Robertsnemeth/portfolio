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
      className="w-3/4 lg:w-1/2 h-screen flex flex-col gap-8 justify-center border border-l-0 border-r-0">
      <TrackingText>about</TrackingText>
      <motion.img
        initial={{ 
          x: 200,
          opacity: 0
          }}
        transition={{ duration: 1}}
        whileInView={{ opacity: 1, x: 0}}
        src={HeroImg} 
        alt="hero image" 
        className='rounded w-48'/>
      <div className='relative'>
        <p className=" text-base lg:text-2xl text-center z-10">
        Hey everyone, my name is Robert Nemeth, I go by Bobby. I am a Full Stack Developer based out of Tacoma, WA. Ive built projects in Python, Java and MERN but I am particularily passionate about React/Next.js.
        </p>
        <p className=" text-base lg:text-2xl text-center z-10">
          I love pixel perfect design, clean interfaces and thoughtful UI/UX. Being able to create responsive experiences for clients is what draws me to development. 
        </p>
        <div className="absolute left-0 top-5 w-full h-48 bg-gray-300 opacity-10 -skew-y-12"></div>
      </div>
    </motion.div>
  )
}

export default About