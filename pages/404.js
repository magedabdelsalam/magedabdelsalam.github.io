import Link from 'next/link'

export default function Custom404() {
    return <header>
        <h3><Link href="/"><a>{`<-`} Back</a></Link></h3>
        <div>
            <h2>Page not found - 404</h2>
            <p>This page is either broken, or no longer exists.</p>
        </div>
        </header>
}