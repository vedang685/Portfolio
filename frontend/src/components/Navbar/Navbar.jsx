import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import { images } from '../../constants'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const[toggle, setToggle] = useState(false)
    const location = useLocation();
    const [cs, setCs] = useState(null);

    useEffect(()=>{
        if(location.pathname === '/case-study'){
            setCs(true)
        }else{
            setCs(false)
        }
    },[location])

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            {cs?(
                <Link to="/"><img src={images.logo} alt="" /></Link>
            ):(
                <img src={images.logo} alt="" />
            )}
        </div>
        <ul className='app__navbar-links'>
            {cs?(
                null
            ):(
                ['home', 'about', 'work', 'skills', 'contact','case study'].map((item)=>(
                    <li className="app__flex p-text" key={`link-${item}`}>
                        {item==='case study'?(
                            <>
                            <div></div>
                            <Link to="/case-study">{item}</Link>
                            </>
                        ):(
                        <>
                        <div></div>
                        <a href={`#${item}`}>{item}</a>
                        </>
                        )}
                    </li>
                ))
            )}
        </ul>

        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={()=> setToggle(true)}/>
            {
                toggle && (
                 <motion.div
                    whileInView={{x:[300,0]}}
                    transition={{duration: 0.85, ease: 'easeOut'}}
                 >
                    <HiX onClick={()=> setToggle(false)}/>
                    <ul>
                        {['home', 'about', 'work', 'skills', 'contact', 'case study'].map((item) => (
                            <li key={item}>
                                {item === 'case study' ? (
                                    <Link to='/case-study'>Case Study</Link>
                                ) : (
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                )}
                            </li>
                        ))}
                    </ul>
                 </motion.div>    
                
            )}
        </div>
    </nav>
  )
}

export default Navbar