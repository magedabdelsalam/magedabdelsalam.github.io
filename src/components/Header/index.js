// Packages
import { motion } from 'framer-motion';
import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
// Styles
import './index.css'

const Header = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }, [pathname]);
    return(
        <header>
            <div className='logo'><NavLink exact to='/'>Maged Abdelsalam</NavLink></div>
            <motion.div 
            className='gallery'
            animate={{ rotate: [10,0,-10,0,10], transition: {repeat: 1, duration: 0.6, ease:"linear"}}}
            whileHover={{ rotate: 0, transition: {duration: 0.3} }}
            whileTap={{ rotate: 360, transition: {duration: 1} }}
            >
                <NavLink exact to='/design'>🖼</NavLink>
            </motion.div>
        </header>
    )
}

export default Header;
