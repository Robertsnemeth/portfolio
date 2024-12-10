import React from 'react';
import { BiChevronUpCircle } from 'react-icons/bi';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className='sticky bottom-0 h-full'>
      <Link to="#profile">
        <BiChevronUpCircle size="50" className='opacity-50 hover:opacity-100 transition-all delay-75'/>
      </Link>
    </footer>
  )
}

export default Footer