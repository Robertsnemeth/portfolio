import React from 'react'
import TrackingText from './styled_components/TrackingText';
import { motion } from "framer-motion";
import Slider from './styled_components/Slider';
import RottenPotatoes from '../assets/rotten-potatoes-home.PNG';

const Projects = () => {

  const projectList = [{
    title: "Rotten Potatoes",
    image: RottenPotatoes,
    description: "Rotten Potatoes was built for movie lovers. Compare watchlists with other users to see what they are watching and gather inspiration.Utilizing Login and Logout Authentication with JWT, add multiple watchlists loaded with any movie or tv show that you havn't gotten to yet. Compare watchlists with other users to see what they are watching and gather inspiration.",
    link: "https://rotten-potatoes-alpha.vercel.app/rotten_potatoes/home_page"
  },
  {
    title: "Rotten Potatoes",
    image: RottenPotatoes,
    description: "Rotten Potatoes was built for movie lovers. Compare watchlists with other users to see what they are watching and gather inspiration.Utilizing Login and Logout Authentication with JWT, add multiple watchlists loaded with any movie or tv show that you havn't gotten to yet. Compare watchlists with other users to see what they are watching and gather inspiration.",
    link: "https://rotten-potatoes-alpha.vercel.app/rotten_potatoes/home_page"
  }
]

  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col w-full sm:w-3/4 justify-center items-center text-center gap-10 h-screen border-b relative">
      <TrackingText>Projects</TrackingText>
      <Slider projects={projectList}/>
    </motion.div>
  )
}

export default Projects