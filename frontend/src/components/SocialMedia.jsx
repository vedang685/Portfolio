import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href='https://twitter.com/thisisvedang'>
            <BsTwitter/>
        </a>
        <a href='https://instagram.com/vedang_.pvtt'>
            <BsInstagram/>
        </a>
        <a href='https://github.com/vedang685'>
            <FaGithub/>
        </a>
    </div>
  )
}

export default SocialMedia