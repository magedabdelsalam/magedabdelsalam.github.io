// Packages
import React from "react"
import { motion } from "framer-motion";
// Data
import designs from '../data/designs'

const Design = ({container}) => {
    const item = {
        hide: { 
            opacity: 0,
            x: "60px",
            transition:{
                duration: 0.3,
            }
        },
        show: { 
            opacity: 1,
            x: "0px",
            transition:{
                duration: 0.3,
            }
        },
        exit: { 
            opacity: 0,
            x: "-60px",
            transition:{
                duration: 0.3,
            }
        },
    }

    return(
        <motion.div
        variants={container}
        initial="hide"
        animate="show"
        exit="exit"
        className="design"
        >
            {designs.map((design, index) => (
                <motion.img variants={item} src={design.img} alt={design.name} key={index}/>
            ))}
        </motion.div>
    )
}

export default Design;