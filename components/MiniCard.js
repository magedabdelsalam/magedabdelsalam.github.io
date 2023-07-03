import styles from '../styles/Card.module.css'

export default function MiniCard(minicard) {
    return(
        <li className={minicard.nocard ? [styles.miniCard + " " + styles.noMiniCard] : styles.miniCard} >
            <h3>{minicard.title}</h3>
            <ul>
                {minicard.children}
            </ul>
        </li>
    )
}