import styles from 'components/Card/Card.module.css'
import Link from 'next/link'

export default function Card({url,thumbnail,title,description}) {
    return(
         <div className={styles.card}>
            { thumbnail ? <img alt={title} src={thumbnail} className={styles.img}/> : false }
            <div className={styles.content}>
                { title ? <Link href={url}><h3>{title}</h3></Link> : false }
                { description ? <p>{description}</p> : false }
            </div>
        </div>
    )
}