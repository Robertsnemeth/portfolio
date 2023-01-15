import React from 'react';
import HeroImg from '../assets/hero.JPG'

const About = () => {
  return (
    <div id="about" className="w-3/4 lg:w-1/2 h-screen flex flex-col gap-4 justify-center border border-l-0 border-r-0">
      <p className=" text-base lg:text-2xl text-center">
      Hey everyone, my name is Robert Nemeth but I go by Bobby. I am a Full Stack Developer based out of Tacoma, WA. Ive built projects in Python, Java and MERN but I am particularily passionate about React/Next.js.
      </p>
      <p className=" text-base lg:text-2xl text-center">
        I love pixel perfect design, clean interfaces and thoughtful UI/UX. Being able to create responsive experiences for clients is what draws me to development. 
      </p>
    </div>
  )
}

export default About