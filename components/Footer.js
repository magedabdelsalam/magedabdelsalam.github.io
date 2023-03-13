// Styles
import styles from '../styles/Footer.module.css'
import Link from 'next/link'


function Footer() {
    return(
        <footer>
            <hr/>
            <h2>About</h2>
            <p>Maged Abdelsalam is a Product Designer based in Seattle.<br/>He&apos;s working on Konan AI at <Link href='https://www.synapse-analytics.io'>Synapse Analytics</Link>.</p>
            <ul className={styles.socials}>
                <li><Link href="https://cal.com/maged">Schedule a Call</Link></li>
                <li><Link href="mailto:hello@magedabdelsalam.com">Email</Link></li>
                <li><Link href="https://github.com/magedabdelsalam">Github</Link></li>
                <li><Link href="https://linkedin.com/in/magedabdelsalam">LinkedIn</Link></li>
                <li><Link href="https://adplist.org/mentors/maged-abdelsalam">ADPList</Link></li>
            </ul>
            <hr/>
        </footer>
    )
}

export default Footer;