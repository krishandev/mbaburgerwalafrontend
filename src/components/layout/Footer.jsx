import React from 'react'
import {AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
     <footer>
        <div>
        <h2>MBA Burger Wala</h2>
        <p>We are trying to give you the best teste possible</p>
        <br/>
        <em>We give attention to genuine feedback.</em>
        <strong>All Right Reserved @MBA Burger Wala</strong>
        </div>
        <aside>
            <h4>Follow Us</h4>
       <a href='#'><AiFillFacebook/></a>
       <a href='#'><AiFillInstagram/></a>
       <a href='#'><AiFillYoutube/></a>
       <a href='#'><AiFillGithub/></a>
        </aside>
     </footer>
  )
}

export default Footer