import React from 'react'
import EmailForm from '../emailForm/EmailForm';
import Navlinks from '../navlinks/Navlinks';
import About from '../about/About';
import Socials from '../socials/Socials';
import Resume from '../resume/Resume';
import './layout.css'
const Layout = () => {
  return (
    <div className='layout'>
      <div className='header-container'>
        <h1 className='my-name'>Julian Garcia-Hernandez</h1>
        <Navlinks />
      </div>
      <div className='body-container'>
        <h2>About</h2>
        <About />
        <h2>Resume</h2>
        <Resume />
        <h2>Socials</h2>
        <Socials />
        <h2>Contact</h2>
        <EmailForm />
      </div>
    </div>
  )
}

export default Layout //this means that it would 