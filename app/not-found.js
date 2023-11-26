import Link from 'next/link'

export default function NotFound() {
    return <header>
        <h4><Link href="/">{`<-`} Back</Link></h4>
        <div>
            <h2>Page not found - 404</h2>
            <p>This page is either broken, or no longer exists.</p>
        </div>
    </header>
}