'use client'
// Packages
import Link from 'next/link'
import styles from 'components/Header/Header.module.css'
import Image from 'next/image'

export default function Header() {
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
                    <Link href="mailto:hello@magedabdelsalam.com" className={styles.cta}>Email</Link>
                </div>
            </section>
        </header>
    )
}