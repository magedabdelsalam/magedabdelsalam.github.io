'use client'

import { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const [copySuccess, setCopySuccess] = useState('Get started');

    const copyToClipboard = () => {
        navigator.clipboard.writeText('hello@magedabdelsalam.com')
            .then(() => {
                setCopySuccess('Copied');
                setTimeout(() => setCopySuccess('Get started'), 2000);
            })
            .catch(err => console.error('Try again', err));
    };

    return(
        <footer>
            <section>
                <div className={styles.attn}>
                    <h2>Ready to turn work <br/>software into play?</h2>
                    <button className={styles.cta} onClick={copyToClipboard}>{copySuccess}</button>    
                </div>
            </section>
            <section className={styles.poster}>
                <h4><Link href="#top">↑ Top</Link></h4>
                <p>© Maged Abdelsalam</p>
            </section>
        </footer>
    )
}
