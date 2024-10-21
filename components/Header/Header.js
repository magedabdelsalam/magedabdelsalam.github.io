'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from 'components/Header/Header.module.css'
import Image from 'next/image'

export default function Header() {
    const [copySuccess, setCopySuccess] = useState('Email')

    const copyToClipboard = () => {
        navigator.clipboard.writeText('hello@magedabdelsalam.com')
            .then(() => {
                setCopySuccess('Copied')
                setTimeout(() => setCopySuccess('Email'), 2000)
            })
            .catch(err => console.error('Try again', err))
    }

    return(
        <header id="top">
            <section>
                <Link href="/"><h1 className={styles.logo}>Make work <br/><div className={styles.logoSub}>software</div> fun</h1></Link>
                <div className={styles.poster}>
                    <div>
                        <Image src="/maged.jpg" alt="Maged Abdelsalam" width={48} height={48} className={styles.avatar}/>
                        <div>
                            <span>Maged Abdelsalam</span>
                            <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/magedabdelsalam">
                            Lead UX designer
                            </a>
                        </div>
                    </div>
                    <button className={styles.cta} onClick={copyToClipboard}>{copySuccess}</button>
                </div>
            </section>
        </header>
    )
}
