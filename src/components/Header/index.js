import React from "react"
import { NavLink } from 'react-router-dom'

import './index.css'

const Header = () => {
    return(
        <header className='header'>
            <h1 className="logo"><NavLink exact to="/">Maged Abdelsalam</NavLink></h1>
            <h5><NavLink to="/work">Work</NavLink></h5>
        </header>
    )
}

export default Header;