// Packages
import React, { useEffect } from "react"
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from "framer-motion"
// Styles
import './index.css'
import { NavHashLink } from "react-router-hash-link"

const Chat = ({ filter,path,category,photo,author,title,subtitle,thumbnail }) => {
    const controls = useAnimation();
    const {ref,inView} = useInView();

    useEffect(() => {
        if (inView){
            controls.start('show');
        }
        if (!inView){
            controls.start('exit');
        }
    },[controls,inView])

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
        <motion.div variants={item} className='chat'>
            <motion.div ref={ref} animate={controls} variants={item}>
            {photo ? <div className='photo'>
                <img src={photo} alt={author}/>
            </div> : null}
            {category || filter ? <NavHashLink to={`/work#${category}`} className='category' activeClassName='selectedCategory' onClick={()=> (filter(category))}>{category}</NavHashLink> : null}
            {path ? <Link to={path} className='content'>
                {title ? <h2 className="title">{title}</h2> : null}
                {subtitle ? <p className="subtitle">{subtitle}</p> : null}
                {thumbnail ? <img className="thumbnail" src={thumbnail} alt={title}/> : null}
            </Link> : null}
            </motion.div>
        </motion.div>
    )
}

export default Chat;