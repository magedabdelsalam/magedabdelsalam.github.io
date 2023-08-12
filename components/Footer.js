import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return(
        <footer>
            <div>            
                <h2>About</h2>
                <p>My name is Maged [Ma-ged]. I am a product designer with 8+ years of experience working with startups to understand human frustration (Research) and imagine better solutions (Prototypes).</p>
                <p>Avaliable for hire. Email me at <Link href="mailto:hello@magedabdelsalam.com"><a className={styles.highlight}>hello@magedabdelsalam.com</a></Link> </p>
            </div>
        </footer>
    )
}