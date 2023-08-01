import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {motion} from 'framer-motion'

const Login = () => {
  return (
     <section className='login'>
        <motion.button 
        initial={{
            y:'-100%',
            opacity:0
        }}
        animate={{
            y:'0',
            opacity:1
        }}
        >Login with Google <FcGoogle/></motion.button>

     </section>
  )
}

export default Login