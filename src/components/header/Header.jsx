import React from 'react'
import closeIcon from './../../assets/closeIcon.svg'
import './Header.css'
const Header = () => {
  return (
    <div className='header-container'>
      <div className='contact-text'>
        Contact Us Now
      </div>
      <div className='whatsapp-number'>
        WhatsApp Contact: +91 9682976540
      </div>
      <div className='closeIcon'>
        <img src={closeIcon} alt="closeIcon" />
      </div>
    </div>
  )
}

export default Header
