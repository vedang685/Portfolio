import React from 'react'
import { useState, useEffect } from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import {motion} from 'framer-motion'
import {Appwrap, MotionWrap} from '../../wrapper'
import {urlFor, client} from '../../client'
import { useMediaQuery } from '@react-hook/media-query';
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import './Work.scss'
import { Link } from 'react-router-dom'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y:0, opacity:1})
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([])
  const isLargeScreen = useMediaQuery('(min-width: 768px)')
  const isSmallScreen = !isLargeScreen
  
  useEffect(()=>{
    const query = '*[_type == "works"]';
    client.fetch(query)
      .then((data)=>{
        setWorks(data);
        setFilterWork(data);
      })
  },[])
  
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({y:100, opacity:0})

    setTimeout(() => {
      setAnimateCard({y:0, opacity:1})
      if(item === 'All')
      {
        setFilterWork(works)
      }
      else
      {
        setFilterWork(works.filter((work)=> work.tags.includes(item)))
      }
    }, 500);
  }

  return (
  <>
    <h2 className='head-text'>
      My creative <span>Portfolio</span> section
    </h2>
    <div className='app__work-filter'>
      {['UI/UX','Web App','React JS','All'].map((item,index)=>(
        <div
        key={index}
        onClick={()=>handleWorkFilter(item)}
        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active':''}`}
        >
          {item}
        </div>
      ))}
    </div>

    <motion.div
      animate={animateCard}
      transition={{duration:0.5, delayChildren:0.5}}
      className='app__work-portfolio'
    >
      {
        filterWork.map((work,index)=>(
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt={work.name}/>
              {isLargeScreen && (
                <motion.div
                  whileHover={{opacity: [0,1]}}
                  transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                  className='app__work-hover app__flex'
                >
                  <a href={work.projectLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{scale:[0,1]}}
                      whileHover={{scale: [1,0.9]}}
                      transition={{duration: 0.25}}
                      className='app__flex'
                    >
                      <AiFillEye/>
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{scale:[0,1]}}
                      whileHover={{scale: [1,0.9]}}
                      transition={{duration: 0.25}}
                      className='app__flex'
                    >
                      <AiFillGithub/>
                    </motion.div>
                  </a>
                </motion.div>
              )}
            </div>
            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{marginTop:10}}>{work.description}</p>
              {isLargeScreen && (
                <div className='caseStudy-div'>
                  <Link className="caseStudy-button" to="/case-study">Case Study</Link>
                </div>
              )}
              {isSmallScreen && (
                <div className='app__footer-link app__social'>
                <a href= {work.codeLink}>
                <FaGithub/>
                </a>
                <a href= {work.projectLink}>
                <FaGlobe/>
                </a>
                </div>
              )}
              <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))
      }
    </motion.div>
  </>
  )
}

export default Appwrap(MotionWrap(Work,'app__works'),'work','app__primarybg')