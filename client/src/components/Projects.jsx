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
      className="flex flex-col w-3/4 justify-center items-center text-center gap-10 h-screen border border-l-0 border-r-0 border-t-0 relative">
      <TrackingText>Projects</TrackingText>
      <div className='flex flex-col gap-4'>
        <h1 className="text uppercase">Rotten Potates</h1>
        <div className='flex flex-col gap-2'>
          <a href="https://rotten-potatoes-alpha.vercel.app/rotten_potatoes/home_page" target="_blank">
            <img src={RottenPotatoes} alt="rotten potatoes screen" className='w-3/4 rounded cursor-pointer' />
          </a>
          <p className="px-2">
            Rotten Potatoes was built for movie lovers.
            Utilizing Login and Logout Authentication with JWT, add multiple watchlists loaded with any movie or tv show that you havn't gotten to yet. 
            Compare watchlists with other users to see what they are watching and gather inspiration.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects