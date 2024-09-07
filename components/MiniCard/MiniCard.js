import styles from 'components/MiniCard/MiniCard.module.css'
import Image from 'next/image'

export default function MiniCard({img,title,description}) {
    return(
        <div className={styles.card}>
            { img ? <Image src={img} alt={title} fill={true} className={styles.img}/> : false }
            <div className={styles.content}>
                { title ? <h4>{title}</h4> : false }
                { description ? <p>{description}</p> : false }
            </div>
        </div>
    )
}