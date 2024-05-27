import Link from 'next/link'
import styles from 'components/Footer/Footer.module.css'

export default function Footer() {
    return(
        <footer className={styles.poster}>
            <p>© Maged Abdelsalam</p>
            <h4><Link href="#top">↑ Top</Link></h4>
        </footer>
    )
}