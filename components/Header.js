// Packages
import Link from 'next/link'
import React from 'react';
import styles from '../styles/Header.module.css'

export default function Header() {
    return(
        <header id="top">
            <section>
                <h1><Link href="/" className={styles.logo}>Maged Abdelsalam</Link></h1>
                <div>
                <p>Product Designer based in Seattle, WA.</p>
                <ul className={styles.socials}>
                    <li><a target="_blank" rel="noreferrer" href="https://github.com/magedabdelsalam">Github</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://linkedin.com/in/magedabdelsalam">LinkedIn</a></li>
                </ul>
                </div>
            </section>
        </header>
    )
}