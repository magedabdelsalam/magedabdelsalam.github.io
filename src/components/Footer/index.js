// Packages
import React from "react"
// Styles
import './index.css'

function Footer() {
    return(
        <footer>
            <hr/>
            <h3>About Maged Abdelsalam</h3>
            <p>A product designer and developer based in the Seattle area.</p>
            <ul className='socials'>
                <li><a href="mailto:hello@magedabdelsalam.com">Email</a></li>
                <li><a href="https://github.com/magedabdelsalam">Github</a></li>
                <li><a href="https://linkedin.com/in/magedabdelsalam">LinkedIn</a></li>
            </ul>
            <p>© All rights reserved.</p>
        </footer>
    )
}

export default Footer;