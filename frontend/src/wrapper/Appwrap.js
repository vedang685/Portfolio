import React, { useEffect, useState } from 'react'
import {NavigationDots, SocialMedia} from '../components'
import {useLocation} from 'react-router-dom'

const Appwrap = (Component, idName, classNames) => function HOC() {
  const location = useLocation();
  const [cs, setCs] = useState(null);

  useEffect(() => {
    if(location.pathname === '/case-study') {
      setCs(true);
    } else {
      setCs(false);
    }
  }, [location]);

  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className='app__wrapper app__flex'>
        <Component />
      </div>
      {/* {cs ? (null) : (
        <> */}
          <NavigationDots active={idName} />
        {/* </>
      )} */}
    </div>
  );
};
export default Appwrap