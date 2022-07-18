// Styles
import styles from '../styles/Footer.module.css'

function Footer() {
    return(
        <footer>
            <hr/>
            <p>A designer and developer based in Seattle.</p>
            <ul className={styles.socials}>
                <li><a href="mailto:hello@magedabdelsalam.com">Email</a></li>
                <li><a href="https://cal.com/maged">Chat</a></li>
                <li><a href="https://github.com/magedabdelsalam">Github</a></li>
                <li><a href="https://linkedin.com/in/magedabdelsalam">LinkedIn</a></li>
                <li><a href="https://adplist.org/mentors/maged-abdelsalam">Mentorship</a></li>
            </ul>
            <p>© All rights reserved.</p>
        </footer>
    )
}

export default Footer;