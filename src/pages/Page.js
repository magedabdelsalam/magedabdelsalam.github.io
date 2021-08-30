import { motion } from "framer-motion";
import React from "react"

const Page = ({content}) => {
    const container = {
        hidden: { 
            opacity: 0,
            x: "5vw",
            transition:{
                duration: 1,
            }
        },
        show: { 
            opacity: 1,
            x: "0vw",
            transition:{
                duration: 1,
            }
        },
        exit: {
            opacity: 0,
            x: "-5vw",
            transition: {
                duration: 1,
            }
        }
    }
    return(
        <motion.article
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        >
            {content}
        </motion.article>
    )
}

export default Page;