import Link from 'next/link'
import Card from '../components/Card'
import MiniCards from '../components/MiniCards'
import MiniCard from '../components/MiniCard'

export default function Custom404() {
    return <section>
        <h2><Link href="/"><a>{`<-`} Back</a></Link></h2>
        <Card title="Page not found - 404">
            <p>This page is either broken, or no longer exists.</p>
        </Card>
    </section>
}