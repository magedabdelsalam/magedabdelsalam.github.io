// Packages
import React from "react"
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
// Components
import Chat from '../components/Chat'
// Data
import pages from '../data/pages'

const Page = ({content, container}) => {
    let location = useLocation();
    let randomNum = Math.floor(Math.random()*pages.length)
    if(location.pathname === pages[randomNum].path){
        if(randomNum === pages.length - 1){
            randomNum = randomNum - 1
        } else {
            randomNum = randomNum + 1
        }
    }
    return(
        <motion.article
        variants={container}
        initial="hide"
        animate="show"
        exit="exit"
        >
            {content}
            <hr/>
            <Chat
            path={pages[randomNum].path}
            photo={pages[randomNum].photo}
            author={pages[randomNum].author}
            title={pages[randomNum].title}
            subtitle={pages[randomNum].subtitle}
            thumbnail={pages[randomNum].thumbnail}
            />
        </motion.article>
    )
}

export default Page;