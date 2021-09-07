// Packages
import React from "react"
import { motion } from "framer-motion";

const Page = ({container}) => {
    return(
        <motion.article
        variants={container}
        initial="hide"
        animate="show"
        exit="exit"
        >
            <h1>Page doesn't exist or is expired.</h1>
        </motion.article>
    )
}

export default Page;