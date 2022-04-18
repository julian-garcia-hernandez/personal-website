import React from 'react'
import EmailForm from '../emailForm/EmailForm';
import './layout.css'
const Layout = () => {
  return (
    <div className='layout'>
      <div className='grid'>
        <div className='info-container'>
          <h1>Julian Garcia-Hernandez</h1>
          <nav className='info-links'>
            <ul>
              <li><a href="#">My Story</a></li>
              <li><a href="#">My Interests</a></li>
              <li><a href="#">Socials</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <EmailForm />
    </div>
  )
}

export default Layout //this means that it would 