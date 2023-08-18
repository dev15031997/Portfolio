import React from 'react'
import {Instagram as InstagramIcon} from '@material-ui/icons';
import {Facebook as FacebookIcon} from '@material-ui/icons';
import {Twitter as TwitterIcon} from '@material-ui/icons'
import {LinkedIn as LinkedInIcon} from '@material-ui/icons';
import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href="https://www.instagram.com/dev_45/" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>
            <a href="https://www.facebook.com/devashish.pal.7" target="_blank" rel="noopener noreferrer"><FacebookIcon/></a>
            <a href="https://www.linkedin.com/in/devashish-pal-90b1b3160/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
            <a href="https://twitter.com/Devashishpal7" target="_blank" rel="noopener noreferrer"><TwitterIcon/></a>
            
        </div>
        <p> Copyright &copy; 2023 devTech.com | All rights reserved.</p>
    </div>
  )
}

export default Footer