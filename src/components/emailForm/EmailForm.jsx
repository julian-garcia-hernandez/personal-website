import React from 'react'
import './emailForm.css'
const EmailForm = () => {
    return (
    <div className='emailForm-container'>
        <form className='emailForm'>
            <input className='input-username' type='text' name='user_name' placeholder='Name' />
            <input className='input-email' type='email' name='user_email' placeholder='Email' />
            <textarea className='textarea-message' name='message' placeholder='Message' />
            <input className='btn-submit' type='submit' value='Send' />
        </form>
    </div>
    )
}

export default EmailForm