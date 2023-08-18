import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectDisplay from './pages/ProjectDisplay'

const App = () => {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/project/:id" element={<ProjectDisplay/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </div> 
  )
}

export default App