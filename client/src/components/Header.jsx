import { motion } from 'framer-motion';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  return (
    <header id="header" className='sticky top-0 flex justify-between z-20 w-full'>
        <motion.div
          initial={{ 
            x: -200,
            opacity: 0
            }}
          transition={{ duration: 1}}
          whileInView={{ opacity: 1, x: 0}}
        >
          <SocialIcon url="https://github.com/Robertsnemeth"
          fgColor="gray"
          bgColor="transparent"
          className='cursor-pointer transition-all delay-75 hover:scale-125'
          target="_blank"/>
          <SocialIcon url="https://www.linkedin.com/in/robert-s-nemeth/"
          fgColor="gray"
          bgColor="transparent"
          className='cursor-pointer transition-all delay-75 hover:scale-125'
          target="_blank"/>
          <SocialIcon url="https://www.twitter.com/YankeeSix"
          fgColor="gray"
          bgColor="transparent"
          className='cursor-pointer transition-all delay-75 hover:scale-125'
          target="_blank"/>
          <SocialIcon url="https://www.instagram.com/yankeesix/"
          fgColor="gray"
          bgColor="transparent"
          className='cursor-pointer transition-all delay-75 hover:scale-125'
          target="_blank"/>
        </motion.div>
        <Link to="#contact">
          <motion.div 
            initial={{ 
              x: 50,
              opacity: 0
              }}
            transition={{ duration: 1}}
            whileInView={{ opacity: 1, x: 0}}
            className='flex items-center cursor-pointer p-1 hover:underline '>
              <SocialIcon
              network='email'
              fgColor='gray'
              bgColor="transparent"
              />
              <p className="uppercase hidden md:flex md:p-2 text-sm text-gray-400">Contact Me</p>
            </motion.div>
        </Link>
    </header>
  )
}

export default Header