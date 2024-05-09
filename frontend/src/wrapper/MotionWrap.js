import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion';
import { useLocation } from 'react-router-dom';

const MotionWrap = (Component, classNames) => function HOC(){
  const location = useLocation();
  const [cs, setCs] = useState(false)
  useEffect(()=>{
    if(location.pathname === '/case-study'){
      setCs(true)
    }
  },[location])
  return (
    <>
      {cs?(
        <div
          className={`${classNames} app__flex`}
        >
          <Component/>
      </div>
      ):(
      <motion.div
          whileInView={{y:[100,50,0], opacity:[0,0,1]}}
          transition={{duration:0.5}}
          className={`${classNames} app__flex`}
      >
          <Component/>
      </motion.div>
      )}
    </>
  )
}

export default MotionWrap