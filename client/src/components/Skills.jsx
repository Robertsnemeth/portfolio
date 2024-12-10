import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaPython, FaJava} from 'react-icons/fa';
import { TbBrandJavascript, TbBrandNextjs } from 'react-icons/tb';
import { GrReactjs } from 'react-icons/gr';
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiFlask, SiSpring, SiMysql, SiVisualstudiocode } from 'react-icons/si';
import TrackingText from './styled_components/TrackingText';
import { motion } from "framer-motion";



const Skills = () => {
  return (
    <motion.div 
      id="skills"
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen w-full sm:w-3/4 flex flex-col gap-10 justify-center border border-l-0 border-r-0 border-t-0 relative overflow-hidden'>
        <TrackingText>Skills</TrackingText>
        <motion.div
          initial={{ 
            x: -200,
            opacity: 0
            }}
          transition={{ duration: 1}}
          whileInView={{ opacity: 1, x: 0}}
          className="flex gap-6">
            <TbBrandJavascript size="90"/>
            <TbBrandNextjs size="90"/>
            <SiTypescript size="90"/>
        </motion.div>
        <motion.div 
          initial={{ 
            x: 200,
            opacity: 0
            }}
          transition={{ duration: 1}}
          whileInView={{ opacity: 1, x: 0}}
          className="flex gap-6">
            <AiOutlineHtml5 size="45"/>
            <FaCss3Alt size="45"/>
            <FaJava size="45"/>
            <FaPython size="45"/>
            <GrReactjs size="45"/>
        </motion.div>
        <motion.div 
          initial={{ 
            x: -200,
            opacity: 0
            }}
          transition={{ duration: 1}}
          whileInView={{ opacity: 1, x: 0}}
          className="flex gap-6">
            <SiMongodb size="30"/>
            <SiExpress size="30"/>
            <SiTailwindcss size="30"/>
            <SiFlask size="30"/>
            <SiSpring size="30"/>
            <SiMysql size="30"/>
            <SiVisualstudiocode size="30"/>
        </motion.div>
        <div className="absolute left-0 w-full h-48 bg-gray-300 opacity-10 -skew-y-12"></div>
    </motion.div>
  )
}

export default Skills