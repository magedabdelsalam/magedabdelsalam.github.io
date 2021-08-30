import React from "react"
import './index.css'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const Chat = ({ author,photo,message,title,subtitle,thumbnail,path,note,category,color }) => {
    const item = {
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
        <>
            {path || message ? <motion.div variants={item} className='chat'>
                {photo ? <div className='photo'>
                    <img src={photo} alt={author}/>
                </div> : null}
                {message ? <div className='content'>
                    <p className='message'>{message}</p> 
                </div> : null}
                {path ? <Link to={path} className='content'>
                    {title ? <h2 className="title">{title}</h2> : null}
                    {subtitle ? <p className="subtitle">{subtitle}</p> : null}
                    {thumbnail ? <img className="thumbnail" src={thumbnail} alt={title}/> : null}
                </Link> : null}
                {category ? <span className='category' style={{background: color}}>{category}</span> : null}
                {note ? <motion.div drag whileDrag={{ scale: 1.2 }} className='note' dragMomentum={false}>
                <p>{note}</p>
                </motion.div> : null}
            </motion.div> : null}
        </>
    )
}

export default Chat;