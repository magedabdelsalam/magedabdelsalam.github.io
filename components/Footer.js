// Styles
import styles from '../styles/Footer.module.css'
import Link from 'next/link'


function Footer() {
    return(
        <footer>
            <hr/>
            <h2>About</h2>
            <p>Maged Abdelsalam is a Product Designer based in Seattle.<br/>He&apos;s working on Konan AI at <Link href='https://www.synapse-analytics.io'><a>Synapse Analytics</a></Link>.</p>
            <ul className={styles.socials}>
                <li><a href="https://cal.com/maged">Schedule a Call</a></li>
                <li><a href="mailto:hello@magedabdelsalam.com">Email</a></li>
                <li><a href="https://github.com/magedabdelsalam">Github</a></li>
                <li><a href="https://linkedin.com/in/magedabdelsalam">LinkedIn</a></li>
                <li><a href="https://adplist.org/mentors/maged-abdelsalam">ADPList</a></li>
            </ul>
            <hr/>
        </footer>
    )
}

export default Footer;