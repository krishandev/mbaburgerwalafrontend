import React from 'react'
import {RiFindReplaceLine} from 'react-icons/ri'
import me from './../../assets/krishan.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
   <section className='about'>
    <main>
      <h1>About Us</h1>
      <div>
<article>
<h5>MBA Burger Wala</h5>
        <p>Welcome to our burger shop! We are passionate about crafting mouthwatering burgers that satisfy your cravings. </p>

        <p>Using the finest ingredients, our skilled chefs create a symphony of flavors in every bite. </p>

<Link><RiFindReplaceLine/></Link>
</article>


<div>
<h2>Founder</h2>
  <article>
<div>
<img src={me} alt='krishan'/>
        <h3>Krishan Dev</h3>
</div>
        <p>Whether you're a meat lover, vegetarian, or vegan, we have something delicious for everyone. Join us for a delightful culinary experience today!</p>
  </article>
</div>
</div>
      
    </main>

   </section>
  )
}

export default About