/* eslint-disable @next/next/no-img-element */
import styles from 'styles/Card.module.css'

export default function Card(card) {
    return(
        <div className={styles.card}>
            { card.img ? <img alt={card.title} src={card.img} className={styles.thumbnail}/> : false }
            { card.title || card.subtitle ? <div className={styles.cardContent}>
                { card.title ? <h1>{card.title}</h1> : false }
                { card.subtitle ? <h2>{card.subtitle}</h2> : false }
                { card.description ? <p>{card.description}</p> : false }
            </div> : false }
            {card.children}
        </div> 
    )
}