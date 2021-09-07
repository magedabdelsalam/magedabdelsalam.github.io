// Packages
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router";
import { motion } from "framer-motion";
import { NavHashLink } from "react-router-hash-link";
// Components
import Chat from "../components/Chat"
// Data
import pages from "../data/pages";

const allCategories = [...new Set(pages.map(page => page.category))]

const Work = ({container}) => {
    let location = useLocation();
    const [pageItem, setPageItem] = useState(pages)
    const [category] = useState(allCategories)
    const filter = (category) => {
        if(category === ''){
            return setPageItem(pages)
        }
        const filteredData = pages.filter(page => page.category === category)
        setPageItem(filteredData)
    }

    useEffect(() => {
        filter(location.hash.substring(1))
    },[location])

    return(
        <motion.section
        variants={container}
        initial="hide"
        animate="show"
        exit="exit"
        >
        <ul className="filter">
            {category.map((category, index) => (
                    <li  key={index} onClick={()=> (filter(category))}>
                        <NavHashLink to={`/#${category}`}>
                            {category}
                        </NavHashLink>
                    </li>
            ))}
        </ul>
        {pageItem.map((page, index) => (
            <Chat
            key={index}
            filter={filter}
            path={page.path}
            category={page.category}
            photo={page.photo}
            author={page.author}
            title={page.title}
            subtitle={page.subtitle}
            thumbnail={page.thumbnail}
            />
        ))}
        </motion.section>
    )
}

export default Work;