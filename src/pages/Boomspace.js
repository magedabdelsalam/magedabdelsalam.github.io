import React from "react";
import boomspace_1 from "../imgs/boomspace_1.jpg"
import boomspace_2 from "../imgs/boomspace_2.jpg"
import boomspace_3 from "../imgs/boomspace_3.jpg"
import boomspace_4 from "../imgs/boomspace_4.jpg"
import boomspace_5 from "../imgs/boomspace_5.jpg"
import boomspace_6 from "../imgs/boomspace_6.jpg"
import boomspace_7 from "../imgs/boomspace_7.jpg"

function Boomspace() {
    return(
        <article>
            <section>
                <h1>Boomspace Workshop</h1>
                <p>An Introduction to Web Development in Baltimore city with Vincent Purcell.</p>
                <img className="cover" src={boomspace_1} alt="" />
                <img className="left" src={boomspace_2} alt="" />
                <img className="center" src={boomspace_3} alt="" />
                <img className="right" src={boomspace_4} alt="" />
                <img className="left" src={boomspace_5} alt="" />
                <img className="center" src={boomspace_6} alt="" />
                <img className="right" src={boomspace_7} alt="" />
                <p>Photos by <a href="http://vincentpurcell.co">Vincent Purcell</a></p>
            </section>
        </article>
    )
}

export default Boomspace;