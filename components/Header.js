// Packages
import Link from 'next/link'
import React from 'react';
import styles from '../styles/Header.module.css'

export default function Header() {
    return(
        <header className={styles.header}>
            <div id="top">
                <h1><Link href="/">Maged Abdelsalam</Link></h1>
                <p>Product Designer in Seattle, WA.</p>
                <ul className={styles.socials}>
                    <li><a target="_blank" rel="noreferrer" href="https://github.com/magedabdelsalam">Github ↗</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://linkedin.com/in/magedabdelsalam">LinkedIn ↗</a></li>
                </ul>
            </div>
            <div>
                <a className={styles.hireMe} href="mailto:hello@magedabdelsalam.com">Avaliable for Hire</a>
            </div>
        </header>
    )
}