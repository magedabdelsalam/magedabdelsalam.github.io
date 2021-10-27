// Packages
import Link from 'next/link'
import ActiveLink from './ActiveLink'
// Styles
import styles from '../styles/Header.module.css'

const Header = () => {
    return(
        <header>
            <h1 className={styles.logo}><Link href='/'>Maged Abdelsalam</Link></h1>
            <nav>
                <ul className={styles.nav}>
                    <li>
                        <Link href="/work">
                            <ActiveLink href="/work">Work</ActiveLink>
                        </Link>
                    </li>
                    <li>
                        <Link href="/play">
                            <ActiveLink href="/play">Play</ActiveLink>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
