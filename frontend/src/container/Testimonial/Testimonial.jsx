import React from 'react'
import {motion} from 'framer-motion'
import { useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import {Appwrap, MotionWrap} from '../../wrapper'
import {urlFor, client} from '../../client'

import './Testimonial.scss'

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(()=>{
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';
    client.fetch(query)
      .then((data)=>{
        setTestimonials(data);
      })
    client.fetch(brandsQuery)
      .then((data)=>{
        setBrands(data);
      })
  },[])
  return (
    <>
    {testimonials.length && (
      <div className='app__testimonials-item app__flex'>
        <img src={urlFor(testimonials[currentIndex].imgUrl)} alt='testimonials'/>
      </div>
    )}
    </>
  )
}

export default Appwrap(MotionWrap(Testimonial,'app__testimonials'),'testimonials','app__primarybg')