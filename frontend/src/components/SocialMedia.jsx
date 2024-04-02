import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href='https://twitter.com/thisisvedang'>
            <BsTwitter/>
        </a>
        <a href='https://instagram.com/vedang_.pvtt'>
            <BsInstagram/>
        </a>
        <a href='blank'>
            <FaFacebookF/>
        </a>
    </div>
  )
}

export default SocialMedia