// Packages
import React from "react"
// Assets
import photo_1 from "../assets/photo_1.png"
import photo_2 from "../assets/photo_2.jpg"
import photo_3 from "../assets/photo_3.jpg"

import choicemap_1 from '../assets/choicemap_1.png'
import choicemap_2 from '../assets/choicemap_2.png'
import choicemap_3 from '../assets/choicemap_3.png'
import choicemap_4 from '../assets/choicemap_4.png'
import choicemap_5 from '../assets/choicemap_5.png'
import choicemap_6 from '../assets/choicemap_6.png'
import choicemap_7 from '../assets/choicemap_7.png'

import choicemap_11 from '../assets/choicemap_11.png'
import choicemap_12 from '../assets/choicemap_12.png'
import choicemap_13 from '../assets/choicemap_13.png'
import choicemap_14 from '../assets/choicemap_14.png'
import choicemap_15 from '../assets/choicemap_15.png'
import choicemap_16 from '../assets/choicemap_16.png'
import choicemap_17 from '../assets/choicemap_17.png'

let pages = [
    {
        path: "/choicemap",
        category: "Work",
        photo: photo_1,
        author: "Maged Abdelsalam", 
        title: "ChoiceMap",
        subtitle: "A decision-making app for patients & doctors",
        thumbnail: choicemap_1,
        content:
        <div>
            <img src={choicemap_1} alt="ChoiceMap"/>
            <hr/>
            <h1>About</h1>            
            <p>Humans suck at choosing between multiple complicated options. Computers are extremely good at it. That’s why “ChoiceMap”, a decision support software company, wants to help patients make a better more informed life-altering treatment decision. ChoiceMap hired me to help bring that vision into reality.</p>

            <hr/>

            <img src={choicemap_2} alt="ChoiceMap"/>

            <hr/>

            <h2>Challenges</h2>
            <ul>
                <li>How do patients make a treatment decision today?</li>
                <li>How do physicians explain treatment options and recommend a treatment today?</li>
                <li>Which conditions are complicated enough to need decision support?</li>
                <li>How do we get physicians onboard without overstepping?</li>
                <li>How do we integrate ChoiceMap into the physician’s current workflow?</li>
            </ul>
            <p>Those are all important questions that we needed answers to.</p>
            <hr/>
            
            <h2>Insights</h2>
            <img className="wide" src={choicemap_3} alt="ChoiceMap"/>
            <hr/>
            <img className="wide" src={choicemap_4} alt="ChoiceMap"/>
            <hr/>
            <img className="wide" src={choicemap_5} alt="ChoiceMap"/>
            <hr/>
            <img className="wide" src={choicemap_6} alt="ChoiceMap"/>
            <hr/>
            <img className="wide" src={choicemap_7} alt="ChoiceMap"/>
            <hr/>
            <ol>
                <li>Patients are either unaware of treatment options or find it very hard to make a confident decision between multiple treatment options
                Physician don’t always have all the time necessary to explain all the pros and cons of each treatment.
                </li>
                <li>The burden of follow up is usually put on the patient. If the treatment recommended was too difficult to administer.Chances are the patient will stop the treatment and move on until it gets worse to visit again.</li>
            </ol>
            <hr/>

            <h2>Prototype</h2>
            <img src={choicemap_13} alt="ChoiceMap"/>
            <hr/>
            <img src={choicemap_14} alt="ChoiceMap"/>
            <hr/>
            <img src={choicemap_15} alt="ChoiceMap"/>
            <hr/>
            <img src={choicemap_16} alt="ChoiceMap"/>

        </div>
    },
    {
        path: "/about",
        category: "Blog",
        photo: photo_2,
        author: "Maged Abdelsalam", 
        title: "Hello World",
        subtitle: "A brief biography",
        thumbnail: photo_3,
        content:
        <div>
            <img src={photo_3} alt="Maged Abdelsalam"/>
            <hr/>
            <h1>About</h1>
            <p>Full stack web developer with product and visual design experience. Holds a graduate degree from Maryland Institute College of Arts and a Full-stack Development Certificate from University of Washington.</p>
            <p>Skills in HTML, CSS, JavaScript, React, Node and a dedication to meeting tight deadlines. Successfully rebranded multiple non-profit organizations and startups, which accelerated their growth</p>
            <p>Passionate about approaching new problems from different creative angles and collaborating with others to create modern web applications. Excited to develop mobile responsive web applications that are easy to use and beautiful to look at.</p>
            <p>Positioned to provide a unique perspective on how end users interact with web applications by using my background in design and development.</p>
        </div>
    },
]

export default pages