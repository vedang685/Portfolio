import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const ScrollToTop = () => {
    const location = useLocation();
    useEffect(()=>{
        window.scrollTo(0,0)
    },[location])
}

export default ScrollToTop