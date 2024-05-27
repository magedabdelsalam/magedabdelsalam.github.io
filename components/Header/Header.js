// Packages
import Link from 'next/link'
import React from 'react';
import styles from 'components/Header/Header.module.css'

export default function Header() {
    return(
        <header id="top">
            <Link href="/" className={styles.logo}><h1>MAGED ABDELSALAM</h1></Link>
            <ul className={styles.poster}>
                <li><a target="_blank" rel="noreferrer" href="https://linkedin.com/in/magedabdelsalam">Lead UX designer</a> based in Seattle, WA</li>
                <li>Available for a FT position <Link href="mailto:hello@magedabdelsalam.com" className={styles.cta}>Hire me</Link></li>
            </ul>
        </header>
    )
}