import { motion } from 'framer-motion';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Header = () => {
  return (
    <header className='flex justify-between z-20 '>
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
            className='hover:bg-slate-500 cursor-pointer focus:bg-slate-600'/>
            <SocialIcon url="https://www.linkedin.com/in/robert-s-nemeth/"
            fgColor="gray"
            bgColor="transparent"
            className='hover:bg-slate-500 cursor-pointer'/>
            <SocialIcon url="https://www.twitter.com/YankeeSix"
            fgColor="gray"
            bgColor="transparent"
            className='hover:bg-slate-500 cursor-pointer'/>
            <SocialIcon url="https://www.instagram.com/yankeesix/"
            fgColor="gray"
            bgColor="transparent"
            className='hover:bg-slate-500 cursor-pointer'/>
        </motion.div>
        <motion.div 
          initial={{ 
            x: 200,
            opacity: 0
            }}
          transition={{ duration: 1}}
          whileInView={{ opacity: 1, x: 0}}
          className='flex items-center cursor-pointer p-1 hover:bg-slate-500'>
            <SocialIcon
            network='email'
            fgColor='gray'
            bgColor="transparent"
            />
            <p className="uppercase hidden md:flex md:p-2 text-sm text-gray-400">Contact Me</p>
        </motion.div>
    </header>
  )
}

export default Header