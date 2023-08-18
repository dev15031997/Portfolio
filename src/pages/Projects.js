import React from 'react'
import ProjectItem from '../components/ProjectItem'
import "../styles/Projects.css";
import {projectList} from "../helpers/ProjectList"

const Projects = () => {
  return (
    <div className='projects'>
        <h1>My Personal Projects</h1>
        <div className="projectList">
        {
          projectList.map((elm,index)=>{
            return  <ProjectItem name={elm.name} image={elm.image} id={index}/>
          })
        }
        </div>
    </div>
  )
}

export default Projects