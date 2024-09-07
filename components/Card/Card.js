import styles from 'components/Card/Card.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Card({url,thumbnail,title,description}) {
    return(
         <div className={styles.card}>
            <Link href={url}>
                { thumbnail ? <Image src={thumbnail} alt={title} fill={true} className={styles.img}/> : false }
                <div className={styles.content}>
                    { title ? <h3>{title}</h3> : false }
                    { description ? <p>{description}</p> : false }
                </div>
            </Link>
        </div>
    )
}