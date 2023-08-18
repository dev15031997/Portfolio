import React from 'react'
import {LinkedIn as LinkedInIcon} from '@material-ui/icons';
import {Email as EmailIcon} from '@material-ui/icons';
import {GitHub as GitHubIcon} from '@material-ui/icons';
import Resume from "../downloads/Devashish_pal.pdf"
import  Typical from "react-typical"
import "../styles/Home.css"

const Home = () => {
  return (
    <div className='home'>
      <div className="about">
        <h2> Hi, My Name is Devashish</h2>
        <div className="prompt"> 
          {/* <p>A software Developer with a passion for Learning and Creating.</p> */}
          <p>I am a passionate <span style={{fontWeight:'bold',color:'#e9d35b'}}><Typical loop={Infinity} wrapper='b' steps={['Web Developer',2000,'Graphic Designer',2000,'Web Designer',2000,'Video Editor',2000]} /></span></p>
          
          <a href="https://www.linkedin.com/in/devashish-pal-90b1b3160/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
          <a href="https://github.com/dev15031997" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
          <a href="mailto:devashishpal15@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon/></a>
          <div className="buttons">
            <a href={Resume} download="Devashish Pal"><button className="btn">Download CV <i className='fa fa-download'/></button></a>
          </div>
        </div> 
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML,CSS,Bootstrap,JavaScript,React JS,JQuery</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS,ExpressJS,MongoDB,MySQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, (Basics of C,C++,Java)</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home   