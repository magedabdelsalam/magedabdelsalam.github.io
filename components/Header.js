// Packages
import Link from 'next/link'
import React from 'react';
import styles from '../styles/Header.module.css'

export default function Header() {
    return(
        <header>
            <div className={styles.logo} id="top">
                <h1>Maged Abdelsalam</h1>
                <img className={styles.profile} src="/photo_2.jpg"/>
            </div>
        </header>
    )
}