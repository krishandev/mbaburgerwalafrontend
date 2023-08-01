import React from 'react'
import {motion} from 'framer-motion'
import Founder from './Founder'
import Menu from './Menu'


const Home = () => {
  const options={
    initial:{
      x:'-100%',
      opacity:0
    },
    whileInView:{
      x:'0',
      opacity:1
    }
  }
  return (
<>
<section className='home'>
      <div>
        <motion.h1 {...options}>MBA BurerWala</motion.h1>
        <motion.p {...options} transition={{delay:0.2}}>Make Someone Happy With A Burger.</motion.p>
      </div>
      
      <motion.a {...options} transition={{delay:0.6}} href='#menu'>Explore Now</motion.a>
      
      
    </section>
    <Founder/>
    <Menu/>
</>
  )
}

export default Home