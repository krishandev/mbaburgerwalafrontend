import React from 'react'
import Krishan from './../../assets/krishan.png'
import { Link } from 'react-router-dom'
import {MdDashboard} from 'react-icons/md'
import { motion } from 'framer-motion'

const Profile = () => {
    const options={
        initial:{
            x:'-100%',
            opacity:0
        },
        animate:{
            x:'0',
            opacity:1
        }
    }
  return (
    <section className='profile'>
        <main>
            <motion.img src={Krishan} alt='Krishan' {...options}/>
            <motion.h5 {...options}>Krishan Dev</motion.h5>
            <motion.div {...options} transition={{delay:0.2}}><Link to={'/admin/dashboard'} style={{borderRadius:'0', backgroundColor:'black'}}><MdDashboard/> Dashboard</Link></motion.div>
            <motion.div {...options} transition={{delay:0.4}}><Link to={'/myorders'}>Orders</Link></motion.div>
            <motion.button {...options} transition={{delay:0.6}}>Logout</motion.button>
        </main>
    </section>
  )
}

export default Profile