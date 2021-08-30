import { motion } from "framer-motion";
import React from "react"
import { useState } from 'react';
import pages from "../data/pages";
import Chat from "../components/Chat"

const allCategories = ['All', ...new Set(pages.map(page => page.category))]

const Work = () => {
    const [pageItem, setPageItem] = useState(pages)
    const [category, setCategory] = useState(allCategories)
    const filter = (category) =>{
        if(category === 'All'){
            return setPageItem(pages)
        }
        const filteredData = pages.filter(page => page.category === category)
        setPageItem(filteredData)
    }
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
            <ul>
                {category.map((category) => (
                    <li onClick={()=> (filter(category))}>{category}</li>
                ))}
            </ul>
            <div>
            {pageItem.map((page, index) => (
                <Chat
                key={index}
                photo={page.photo}
                title={page.title}
                subtitle={page.subtitle}
                thumbnail={page.thumbnail}
                category={page.category}
                color={page.color}
                path={page.path}
                note={page.note}
                />
            ))}
            </div>
        </motion.article>
    )
}

export default Work;