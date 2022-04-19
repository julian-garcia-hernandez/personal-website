import React from 'react'
import EmailForm from '../emailForm/EmailForm';
import Navlinks from '../navlinks/Navlinks';
import About from '../about/About';
import Socials from '../socials/Socials';
import './layout.css'
const Layout = () => {
  return (
    <div className='layout'>
      <div className='header-container'>
        <h1 className='my-name'>Julian Garcia-Hernandez</h1>
        <Navlinks />
      </div>
      <About />
      <Socials />
      <EmailForm />
    </div>
  )
}

export default Layout //this means that it would 