import styles from '../styles/Card.module.css'

export default function MiniCards(minicards) {
    return <ul className={styles.miniCards}>
        {minicards.children}
    </ul>
}