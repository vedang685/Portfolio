import React, { useEffect } from 'react'
import {Appwrap, MotionWrap} from '../../wrapper'
import {motion} from 'framer-motion'
import './CaseStudy.scss'
import { images } from '../../constants'
import { useMediaQuery } from '@react-hook/media-query';
import {AiFillEye} from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { FaGlobe } from 'react-icons/fa'
import {useNavigate, Link} from 'react-router-dom'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'


function CaseStudy() {
const isLargeScreen = useMediaQuery('(min-width: 768px)')
const navigate = useNavigate();
const isSmallScreen = !isLargeScreen
const handleClick = () => { 
    navigate('/')
}
  return (
    <>
        <ScrollToTop/>
        <h2 className='head-text y-space'>
            Case Study <span>Section</span> 
        </h2>

        <motion.div
            whileInView={{y:[100,50,0], opacity:[0,0,1]}}
            transition={{duration:0.5}}
            className='app__caseStudy-portfolio'
        >
            <div 
            onClick={isSmallScreen?(handleClick):(null)}
            className='app__caseStudy-item app__flex'
            >
                <div className='app__caseStudy-img app__flex'>
                    <img src={images.flutter} alt=''/>
                    {isLargeScreen && (
                        <motion.div
                        whileHover={{opacity: [0,1]}}
                        transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                        className='app__caseStudy-hover app__flex'
                        >
                        <Link to="/">
                            <motion.div
                            whileInView={{scale:[0,1]}}
                            whileHover={{scale: [1,0.9]}}
                            transition={{duration: 0.25}}
                            className='app__flex'
                            >
                            <AiFillEye/>
                            </motion.div>
                        </Link>
                        </motion.div>
                    )}
                </div>
                <div className='app__caseStudy-content app__flex'>
                    <h4 className='bold-text'>Lorem ipsum dolor sit amet</h4>
                    <p className='p-text' style={{marginTop:10}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Perferendis veniam necessitatibus officia hic enim dolorum iure? Repellendus obcaecati incidunt distinctio 
                     maxime possimus recusandae eius quod excepturi ducimus molestiae esse quisquam, odio laboriosam? Lorem ipsum 
                     dolor sit amet consectetur, adipisicing elit. Voluptas adipisci quae dignissimos recusandae harum placeat accusamus 
                     ab cupiditate vitae voluptate porro itaque cumque unde ipsum suscipit sit quos a ducimus minus consequatur,
                      distinctio animi amet. Placeat, doloribus assumenda? Repellat, aperiam repudiandae. A esse eos quasi ex veritatis
                    tempore similique? Repellat veniam laborum eos est unde.</p>
                    <div className='app__footer-link app__social'>
                        <a href= "/">
                            <FaGithub/>
                        </a>
                        <a href= "/">
                            <FaGlobe/>
                        </a>
                    </div>
                <div className='app__work-tag app__flex'>
                    <p className='p-text'>All</p>
                </div>
                </div>
            </div>
            <div 
            onClick={isSmallScreen?(handleClick):(null)}
            className='app__caseStudy-item app__flex'
            >
                <div className='app__caseStudy-img app__flex'>
                    <img src={images.adidas} alt=''/>
                    {isLargeScreen && (
                        <motion.div
                        whileHover={{opacity: [0,1]}}
                        transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                        className='app__caseStudy-hover app__flex'
                        >
                        <Link to="/">
                            <motion.div
                            whileInView={{scale:[0,1]}}
                            whileHover={{scale: [1,0.9]}}
                            transition={{duration: 0.25}}
                            className='app__flex'
                            >
                            <AiFillEye/>
                            </motion.div>
                        </Link>
                        </motion.div>
                    )}
                </div>
                <div className='app__caseStudy-content app__flex'>
                    <h4 className='bold-text'>Lorem ipsum dolor sit amet</h4>
                    <p className='p-text' style={{marginTop:10}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Perferendis veniam necessitatibus officia hic enim dolorum iure? Repellendus obcaecati incidunt distinctio 
                     maxime possimus recusandae eius quod excepturi ducimus molestiae esse quisquam, odio laboriosam? Lorem ipsum 
                     dolor sit amet consectetur, adipisicing elit. Voluptas adipisci quae dignissimos recusandae harum placeat accusamus 
                     ab cupiditate vitae voluptate porro itaque cumque unde ipsum suscipit sit quos a ducimus minus consequatur,
                      distinctio animi amet. Placeat, doloribus assumenda? Repellat, aperiam repudiandae. A esse eos quasi ex veritatis
                    tempore similique? Repellat veniam laborum eos est unde.</p>
                        <div className='app__footer-link app__social'>
                        <a href= "/">
                        <FaGithub/>
                        </a>
                        <a href= "/">
                        <FaGlobe/>
                        </a>
                        </div>
                    {/* {isSmallScreen && (
                    )} */}
                    <div className='app__work-tag app__flex'>
                        <p className='p-text'>All</p>
                    </div>
                </div>
            </div>
            <div 
            onClick={isSmallScreen?(handleClick):(null)}
            className='app__caseStudy-item app__flex'
            >
                <div className='app__caseStudy-img app__flex'>
                    <img src={images.amazon} alt=''/>
                    {isLargeScreen && (
                        <motion.div
                        whileHover={{opacity: [0,1]}}
                        transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                        className='app__caseStudy-hover app__flex'
                        >
                        <Link to="/">
                            <motion.div
                            whileInView={{scale:[0,1]}}
                            whileHover={{scale: [1,0.9]}}
                            transition={{duration: 0.25}}
                            className='app__flex'
                            >
                            <AiFillEye/>
                            </motion.div>
                        </Link>
                        </motion.div>
                    )}
                </div>
                <div className='app__caseStudy-content app__flex'>
                    <h4 className='bold-text'>Lorem ipsum dolor sit amet</h4>
                    <p className='p-text' style={{marginTop:10}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Perferendis veniam necessitatibus officia hic enim dolorum iure? Repellendus obcaecati incidunt distinctio 
                     maxime possimus recusandae eius quod excepturi ducimus molestiae esse quisquam, odio laboriosam? Lorem ipsum 
                     dolor sit amet consectetur, adipisicing elit. Voluptas adipisci quae dignissimos recusandae harum placeat accusamus 
                     ab cupiditate vitae voluptate porro itaque cumque unde ipsum suscipit sit quos a ducimus minus consequatur,
                      distinctio animi amet. Placeat, doloribus assumenda? Repellat, aperiam repudiandae. A esse eos quasi ex veritatis
                    tempore similique? Repellat veniam laborum eos est unde.</p>
                        <div className='app__footer-link app__social'>
                        <a href= "/">
                        <FaGithub/>
                        </a>
                        <a href= "/">
                        <FaGlobe/>
                        </a>
                        </div>
                    {/* {isSmallScreen && (
                    )} */}
                    <div className='app__work-tag app__flex'>
                        <p className='p-text'>All</p>
                    </div>
                </div>
            </div>
        </motion.div>
    </>
  )
}

export default Appwrap(MotionWrap(CaseStudy,'app__caseStudy'),'caseStudy','app__primarybg')