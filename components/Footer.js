import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return(
        <footer>
            <section>
                <h3>About</h3>
                <p>Product designer with 8+ years of experience working with startups to understand human frustration and imagine better solutions.</p>
                <p>Available for hire. Focused on software that helps people make better decisions at scale. Email me at <Link href="mailto:hello@magedabdelsalam.com" className={styles.highlight}>hello@magedabdelsalam.com</Link></p>
            </section>
        </footer>
    )
}