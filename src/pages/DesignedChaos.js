import React from "react";
import designedchaos_1  from "../imgs/designedchaos_1.jpg"
import designedchaos_2  from "../imgs/designedchaos_2.jpg"
import designedchaos_3  from "../imgs/designedchaos_3.jpg"
import designedchaos_4  from "../imgs/designedchaos_4.jpg"

function DesignedChaos() {
    return(
        <article>
            <section>
                <h1>Designed Chaos</h1>
                <p>A visual exploration of balance.</p>
                <img className="left" src={designedchaos_1} alt="" />
                <img className="center" src={designedchaos_2} alt="" />
                <img className="right" src={designedchaos_3} alt="" />
                <img className="left" src={designedchaos_4} alt="" />
            </section>
        </article>
    )
}

export default DesignedChaos;