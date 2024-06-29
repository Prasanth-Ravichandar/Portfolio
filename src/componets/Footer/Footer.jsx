import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  return (
    <div className='footer'>
       <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo} alt="" />
            <p>I'm Frontend Developer From Chennai, With 1 Year of Experience in Frontend Developments & Familiar in Reactjs Frameworks.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">
                Subscribe   
            </div>
        </div>
     
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2024 Prasanth Ravichandar. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Service</p>
                <p>Privacy Policy</p>
                <p><AnchorLink className='anchor-link' offset={50} href='#contact'>connect with me</AnchorLink></p>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default Footer