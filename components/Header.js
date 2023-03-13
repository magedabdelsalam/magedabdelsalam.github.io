// Packages
import Link from 'next/link'
import React from 'react';
import { useEffect, useState } from 'react';
// Styles
import styles from '../styles/Header.module.css'

const Header = () => {
    return(
        <header>
            <h1 className={styles.logo}><Link href='/'>Maged Abdelsalam</Link></h1>
        </header>
    )
}

export default Header;
