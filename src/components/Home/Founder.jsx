import React from 'react'
import Krishan from './../../assets/krishan.png'
import {motion} from 'framer-motion'

const Founder = () => {
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

   <section className='founder'>
    <motion.div {...options} transition={{delay:'0.4'}}><img src={Krishan} alt='krishan' height={'200px'} width={'200px'}/> 
    <h3>Krishan Dev</h3>
    <p>Hi, I am founder of BurgurWala. <br/> My aim is to deliver high quality burger at affordable Price</p>
    </motion.div>
   </section>
   
  )
}

export default Founder