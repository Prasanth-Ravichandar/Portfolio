import React from 'react'
import './hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt=""/>
        <h1> <span> I'm Prasanth Ravichandar,</span> Frontend Developer</h1>
        <p>I'm Frontend Developer From Chennai, With 1 Year of Experience in Frontend Developments & Frameworks.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default hero