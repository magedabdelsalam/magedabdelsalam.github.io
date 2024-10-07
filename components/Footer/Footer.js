import Link from 'next/link'
import styles from 'components/Footer/Footer.module.css'

export default function Footer() {
    return(
        <footer>
            <section>
                <div className={styles.attn}>
                    <h2>Ready to turn work <br/>software into play?</h2>
                    <Link className={styles.cta} href="mailto:hello@magedabdelsalam.com">Let's talk</Link>    
                </div>
            </section>
            <section className={styles.poster}>
                <h4><Link href="#top">↑ Top</Link></h4>
                <p>©DAGADEGO</p>
            </section>
        </footer>
    )
}