import React from 'react'
import {images} from '../../constants'
import {Appwrap, MotionWrap} from '../../wrapper'
import {client} from '../../client'
import './Footer.scss'

const Footer = () => {
  return (
    <>
    <h2 className='head-text'>Take a coffee and chat with me</h2>
    <div className='app__footer-cards'>
      <div className='app__footer-card'>
        <img src={images.email} alt='email'/>
        <a href="mailto:vedang685@gmail.com" className='p-text'>vedang685@gmail.com</a>
      </div>
    </div>
    </>
  )
}

export default Appwrap(MotionWrap(Footer,'app__footer'),'contact','app__whitebg')