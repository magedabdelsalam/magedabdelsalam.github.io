import React from "react";
import jan25_1 from "../imgs/jan25_1.png"
import jan25_2  from "../imgs/jan25_2.png"
import jan25_3  from "../imgs/jan25_3.png"
import jan25_4  from "../imgs/jan25_4.png"
import jan25_5  from "../imgs/jan25_5.png"
import jan25_6  from "../imgs/jan25_6.png"
import jan25_7  from "../imgs/jan25_7.png"
import jan25_8  from "../imgs/jan25_8.png"
import jan25_9  from "../imgs/jan25_9.png"

function January25th() {
    return(
        <article>
            <section>
                <h1>January 25th</h1>
                <p>A visual sequence of events that happened during the revolution in Egypt.</p>
                <img className="cover" src={jan25_1} alt="" />
                <img className="left" src={jan25_2} alt="" />
                <img className="center" src={jan25_3} alt="" />
                <img className="right" src={jan25_4} alt="" />
                <img className="left" src={jan25_5} alt="" />
                <img className="center" src={jan25_6} alt="" />
                <img className="right" src={jan25_7} alt="" />
                <img className="cover" src={jan25_9} alt="" />
                <img className="left" src={jan25_8} alt="" />
            </section>
        </article>
    )
}

export default January25th;