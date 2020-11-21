import React from "react";
import resume from '../files/MagedAbdelsalam.pdf'

function Footer() {
    return(
        <footer id="contact">
            <h2>Contact</h2>
            <ul>
              <li><a href="mailto: hello@magedabdelsalam.com">E-mail</a></li>
              <li>
                <a href="https://github.com/magedabdelsalam">Github</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/magedabdelsalam">Linkedin</a>
              </li>
              <li>
                <a href={resume}>Resume</a>
              </li>
            </ul>
            <p>&copy; Maged Abdelsalam - <a href="http://www.magedabdelsalam.com/">Home</a></p>
        </footer>
    )
}

export default Footer;