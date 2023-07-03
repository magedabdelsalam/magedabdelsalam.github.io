import styles from '../styles/Card.module.css'
import Link from 'next/link'

export default function Card(card) {
    return(
        <div className={card.nocard ? [styles.card  + " " + styles.noCard] : styles.card} >
            <div className={styles.cardContent}>
                { card.title ? <h1>{card.title}</h1> : false }
                { card.subtitle && card.link ? <h2><Link href={card.link}>{card.subtitle}</Link></h2> : card.subtitle ? <h2>{card.subtitle}</h2> : false }
                { card.description ? <p>{card.description}</p> : false }
            </div>
            { card.img ? <img alt={card.title} src={card.img} className={styles.thumbnail}/> : false }
            {card.children}
        </div>
    )
}