import React from 'react'
import {useParams} from "react-router-dom";
import {projectList} from "../helpers/ProjectList"
import {GitHub as GitHubIcon} from '@material-ui/icons';
import "../styles/ProjectDisplay.css"


const ProjectDisplay = () => {
    const {id}=useParams();
    const project=projectList[id];

  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt="" />
        <p>
           <b>Skills:</b>{project.skill}
        </p>
        <GitHubIcon/>
         
    </div>
  )
} 

export default ProjectDisplay   