import React from "react";
import profile from "../imgs/maged.png"

function Header() {
    return(
        <header>
            <img className="right" src={profile} alt="Maged Abdelsalam's profile" />
            <p>Full stack web developer with product and visual design experience. Holds a graduate degree from Maryland Institute College of Arts and a Full-stack Development Certificate from University of Washington. Skills in HTML, CSS,  JavaScript, React, Node and a dedication to meeting tight deadlines. Successfully rebranded multiple non-profit organizations and startups, which accelerated their growth. Passionate about approaching new problems from different creative angles and collaborating with others to create modern web applications. Excited to develop mobile responsive web applications that are easy to use and beautiful to look at. Positioned to provide a unique perspective on how end users interact with web applications by using  my background in design and development.</p>
        </header>
    )
}

export default Header;