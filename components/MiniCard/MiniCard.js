import styles from 'components/MiniCard/MiniCard.module.css'

export default function MiniCard({img,title,description}) {
    return(
        <div className={styles.card}>
            { img ? <img alt={title} src={img} className={styles.img}/> : false }
            <div className={styles.content}>
                { title ? <h4>{title}</h4> : false }
                { description ? <p>{description}</p> : false }
            </div>
        </div>
    )
}