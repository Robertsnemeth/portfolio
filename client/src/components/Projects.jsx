import React from 'react'
import TrackingText from './styled_components/TrackingText';
import RottenPotatoes from '../assets/rotten-potatoes-home.PNG';
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col w-full sm:w-3/4 justify-center items-center text-center gap-10 h-screen border-b relative">
      <TrackingText>Projects</TrackingText>
      <div className='flex flex-col gap-4'>
        <h1 className="text uppercase">Rotten Potates</h1>
        <div className='flex flex-col gap-2 px-1'>
          <a href="https://rotten-potatoes-alpha.vercel.app/rotten_potatoes/home_page" target="_blank">
            <img src={RottenPotatoes} alt="rotten potatoes screen" className='w-3/4 lg:w-1/2 rounded cursor-pointer' />
          </a>
          <p>
            Rotten Potatoes was built for movie lovers.
            Compare watchlists with other users to see what they are watching and gather inspiration.
          </p>
          <p>
          Utilizing Login and Logout Authentication with JWT, add multiple watchlists loaded with any movie or tv show that you havn't gotten to yet. 
          </p>
          <p>
          Compare watchlists with other users to see what they are watching and gather inspiration.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects