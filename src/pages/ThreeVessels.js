import React from "react";
import threeVessels_1 from "../imgs/threeVessels_1.JPG"
import threeVessels_2 from "../imgs/threeVessels_2.JPG"
import threeVessels_3 from "../imgs/threeVessels_3.JPG"
import threeVessels_4 from "../imgs/threeVessels_4.JPG"
import threeVessels_5 from "../imgs/threeVessels_5.JPG"
import threeVessels_6 from "../imgs/threeVessels_6.JPG"
import threeVessels_7 from "../imgs/threeVessels_7.JPG"

function ThreeVessels() {
    return(
        <article>
            <section>
                <h1>3 Vessels</h1>
                <p>A card game that simulates; life, death, and afterlife through a sequence of events. In each event you are given a set of options on how to behave. A behavior is composed of both an action, and an intention. For each, you can choose between emotion, logic, and faith. The goal is to either, win the most events with the strongest behavior, or achieve a good balance of the total behaviors at the end of the game.</p>
                <p>The game is not for sale at the moment.</p>
                <img className="cover" src={threeVessels_1} alt=""/>
                <img className="left" src={threeVessels_2} alt=""/>
                <img className="center" src={threeVessels_3} alt=""/>
                <img className="right" src={threeVessels_4} alt=""/>
                <img className="left" src={threeVessels_5} alt=""/>
                <img className="center" src={threeVessels_6} alt=""/>
                <img className="right" src={threeVessels_7} alt=""/>
            </section>
        </article>
    )
}

export default ThreeVessels;