import Link from 'next/link'

export default function Custom404() {
    return <section>
        <h1>404 - Page not found</h1>
        <p>This page is either broken, or no longer exists. <Link href="/">Go back home</Link></p>
    </section>
}