import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaPython, FaJava} from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { GrReactjs } from 'react-icons/gr';
import { SiTypescript } from 'react-icons/si';



const Skills = () => {
  return (
    <div className='h-screen w-3/4 lg:w-1/2 flex flex-col gap-4 justify-center relative'>
      <div className="flex gap-10">
        <TbBrandJavascript size="120"/>
        <GrReactjs size="120"/>
        <SiTypescript size="120"/>
      </div>
      <div className="flex gap-10">
        <AiOutlineHtml5 size="60"/>
        <FaCss3Alt size="60"/>
        <FaJava size="60"/>
        <FaPython size="60"/>
      </div>
    </div>
  )
}

export default Skills