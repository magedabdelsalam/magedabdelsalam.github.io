import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return(
        <footer>
            <h3>About</h3>
            <p>Product Designer & Developer based in Seattle, WA. <br/> Designing 0-1 products. Currently at <Link href='https://www.synapse-analytics.io'>Synapse Analytics</Link>.</p>
            <ul className={styles.socials}>
                <li><Link href="mailto:hello@magedabdelsalam.com">Email</Link></li>
                <li><Link href="https://github.com/magedabdelsalam">Github</Link></li>
                <li><Link href="https://linkedin.com/in/magedabdelsalam">LinkedIn</Link></li>
            </ul>
        </footer>
    )
}