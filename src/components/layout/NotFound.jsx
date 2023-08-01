import React from 'react'
import {MdError} from 'react-icons/md'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
   <section className='notfound'>
    <main>
        <div>
         <MdError/>
         <h1>404</h1>
        </div>
        <p>Page not found, click link below to go Homepage</p>
        <Link to={'/'}>Home Page</Link>
    </main>
   </section>
  )
}

export default NotFound