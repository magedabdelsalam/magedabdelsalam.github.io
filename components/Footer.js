// Styles
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return(
        <footer>
            <h2>About</h2>
            <p>Product Designer based in Seattle, WA.<br/>Currently at <Link href='https://www.synapse-analytics.io'>Synapse Analytics</Link>.</p>
            <ul className={styles.socials}>
                <li><Link href="mailto:hello@magedabdelsalam.com">Email</Link></li>
                <li><Link href="https://github.com/magedabdelsalam">Github</Link></li>
                <li><Link href="https://linkedin.com/in/magedabdelsalam">LinkedIn</Link></li>
                <li><Link href="https://adplist.org/mentors/maged-abdelsalam">ADPList</Link></li>
            </ul>
        </footer>
    )
}