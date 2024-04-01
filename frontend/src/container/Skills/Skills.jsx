import React from 'react'
import { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import {Appwrap} from '../../wrapper'
import {urlFor, client} from '../../client'
import ReactTooltip from 'react-tooltip'
import './Skills.scss'

const Skills = () => {
  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])
  useEffect(()=>{
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(query)
      .then((data)=>{
        setExperience(data);
      })
    client.fetch(skillsQuery)
      .then((data)=>{
        setSkills(data);
      })
  },[])
  return (
    <>
      <h2 className='head-text'>
        Skills and Experience 
      </h2>
        <div className='app__skills-container'>
          <motion.div className='app__skills-list'>
            {skills.map((skills)=>(
              <motion.div
                whileInView={{opacity:[0,1]}}
                transition={{duration:0.5}}
                className='app__skills-item app__flex'
                key={skills.name}
              >
                <div 
                className="app__flex"
                style={{backgroundColor: skills.bgColor}}
                >
                  <img src={urlFor(skills.icon)} alt={skills.name}/>
                </div>
                <p className='p-text'>{skills.name}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
    </>
  )
}

export default Skills