import React,{useEffect, useState} from 'react'
import {Link,useLocation} from 'react-router-dom'
import "../styles/Navbar.css"
import {Reorder as ReorderIcon} from '@material-ui/icons';

const Navbar = () => {
  const[expandNavbar,setExpandNavbar]=useState(false);
  const location=useLocation();

  useEffect(()=>{
    setExpandNavbar(false)
  },[location])

  return (
    <div className='navbar' id={expandNavbar?"open":"close"}>
        <div className='toggleButton'>
            <button onClick={()=>{setExpandNavbar((prev)=>!prev)}}><ReorderIcon/></button>
        </div>
        <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>  
        </div>
    </div> 
  )
}

export default Navbar