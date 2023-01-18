import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Route } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='min-w-screen'>
        <Header/>
        <Profile />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
    </div>
  )
}

export default HomePage