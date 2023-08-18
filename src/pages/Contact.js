import React,{useState} from 'react'
import {Email as EmailIcon} from '@material-ui/icons';
import {PhoneEnabled as PhoneEnabledIcon} from '@material-ui/icons';
import {LocationOn as LocationOnIcon} from '@material-ui/icons';
import "../styles/Contact.css"

const Contact = () => {
  const [data,setData]=useState({name:'',email:'',message:''})

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData({...data,[name]:value}) 
  }

  return (
    <div className='contact'>
        <div className="content">
            <h2>Get in Touch</h2>
            <p>Drop me a line through the form below and I'll get back to you!</p>
            {/* <p>If you have any questions,please feel free to drop me a line .If you don't get an answer immediately. I might be travelling through the middle of Nowhere.I'll get back to you as soon as I can.That's a Promise!</p> */} 
        </div>
    <div className="container">
        <div className="contactInfo">
            <div className="box">
                <div className="icon"><LocationOnIcon/></div>
                <div className="text">
                    <h3>Address</h3>
                    <p>Pune, Maharashtra</p>
                </div>
            </div>
            <div className="box">
                <div className="icon"><PhoneEnabledIcon/></div>
                <div className="text">
                    <h3>Phone</h3>
                    <p>+91-8805714266</p>
                </div>
            </div>
            <div className="box">
                <div className="icon"><EmailIcon/></div>
                <div className="text">
                    <h3>Email</h3>
                    <p>devashishpal15@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="contactForm">
            <form action="https://formspree.io/f/xoqovdlv" method='POST'>
                <h2>Send me a Message</h2>
                <div className="inputBox">
                    <input type="text" name="name" onChange={handleChange} value={data.name} autoComplete='off' required />
                    <span>Full Name</span>
                </div>
                <div className="inputBox">
                    <input type="text" name="email" onChange={handleChange} value={data.email} autoComplete='off' required />
                    <span>Email</span>
                </div>
                <div className="inputBox">
                    <textarea name="message"  onChange={handleChange} value={data.message} autoComplete='off' required/>
                    <span>Message</span>
                </div>
                <div className="inputBox">
                    <button type='submit' className='btn' >Send Message</button>
                </div>
            </form>
        </div>
    </div>
    <hr />
    </div>
  )
}

export default Contact;