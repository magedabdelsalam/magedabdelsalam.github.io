/* eslint-disable @next/next/no-img-element */
import styles from 'components/Card/Card.module.css'

export default function Card({title,subtitle,description,img}) {
    return(
        <div className={styles.card}>
            { img ? <img alt={title} src={img} className={styles.thumbnail}/> : false }
            { title || subtitle ? <div className={styles.cardContent}>
                { title ? <h1>{title}</h1> : false }
                { subtitle ? <h2>{subtitle}</h2> : false }
                { description ? <p>{description}</p> : false }
            </div> : false }
        </div>
    )
}