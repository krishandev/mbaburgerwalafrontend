import React from 'react'
import {IoFastFoodOutline} from 'react-icons/io5'
import {FiShoppingCart, FiLogIn} from 'react-icons/fi'
import {FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Header = ({isAuthenticated=true}) => {

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
    <nav>
      <motion.div {...options}>
      <IoFastFoodOutline/>
      </motion.div>
      <motion.div {...options} transition={{delay:0.5}}>
      <Link to='/'>Home</Link>  
      <Link to='/contact'>Contact</Link>
      <Link to='/about'>About</Link>
      <Link to='/cart'><FiShoppingCart/></Link>
      <Link to={isAuthenticated? '/me' : '/login'}>
        {
          isAuthenticated? <FaUser/> : <FiLogIn/>
        }
      </Link>
      </motion.div> 
    </nav>
  )
}

export default Header