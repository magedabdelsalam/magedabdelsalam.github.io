import React from "react"
import { motion } from "framer-motion"
import Chat from '../components/Chat'

import pages from '../data/pages'
import quotes from '../data/quotes'

const Home = () => {
    const container = {
        hidden: { 
            opacity: 0,
            x: "5vw",
            transition: {
                duration: 1,
                staggerChildren: 1
            }
        },
        show: {
            opacity: 1,
            x: "0vw",
            transition: {
                duration: 1,
                staggerChildren: 1
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
            <Chat
                name={quotes[0].name}
                photo={quotes[0].photo}
                message={quotes[0].message}
            />
            <Chat
                photo={pages[0].photo}
                author={pages[0].author}
                title={pages[0].title}
                subtitle={pages[0].subtitle}
                thumbnail={pages[0].thumbnail}
                category={pages[0].category}
                color={pages[0].color}
                path={pages[0].path}
                note={pages[0].note}
            />
            <Chat
                name={quotes[1].name}
                photo={quotes[1].photo}
                message={quotes[1].message}
            />
            <Chat
                photo={pages[1].photo}
                author={pages[1].author}
                title={pages[1].title}
                subtitle={pages[1].subtitle}
                thumbnail={pages[1].thumbnail}
                category={pages[1].category}
                color={pages[1].color}
                path={pages[1].path}
                note={pages[1].note}
            />
        </motion.article>
    )
}

export default Home;