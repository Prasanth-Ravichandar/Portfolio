import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
        <div className="about-left">
        <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
        <div className="about-para">
        <p>Hi, I'm Prasanth, a passionate and skilled Web Designer & Developer. With expertise in HTML5, CSS, JavaScript, and advanced front-end development, I bring dynamic websites to life. My proficiency extends to React.js and Next.js, where I have an intermediate level of experience, allowing me to create responsive and interactive web applications.</p>
            <p>I specialize in WordPress development, including customization and maintenance, and have extensive experience working with Divi, blogs, and SEO to enhance online presence. My skills also encompass web hosting, troubleshooting, and error analysis, ensuring smooth and efficient website performance.</p>
                </div>
                <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"90%"}} /></div>
                <div className="about-skill"><p>Javascript</p> <hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>reactjs</p> <hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Wordpress & Divi</p> <hr style={{width:"90%"}} /></div>
        </div>
        </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>Years of Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>4+</h1>
                <p>Projects</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>4+</h1>
                <p>Happy Clients</p>
            </div>
        </div>
       </div>
  )
}

export default About