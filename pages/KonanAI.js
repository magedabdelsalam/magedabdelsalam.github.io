import Card from '../components/Card'
import MiniCard from '../components/MiniCard'
import MiniCards from '../components/MiniCards'
import Link from 'next/link'

export default function KonanAI({products}) {
    var product = products[0]
    return <article>
        <header>
            <h3><Link href="/"><a>{`<-`} Back</a></Link></h3>
            <Card 
            nocard
            title={product.title}
            description={product.description}
            img={product.thumbnail}
            />
            <Card 
            nocard
            subtitle="Overview"
            description="My initial role was to design any use-case Machine 
            Learning Operations (MLOps) tool from scratch. But after listening 
            from our most important paying customers for more than a year 
            and monitoring current market trends, we decided to pivot and 
            turn Konan from an any use-case MLOps tool, for Machine Learning 
            Engineers and Data Scientists, into a AI Credit Risk Decisioning 
            tool for Risk officers and Business users."
            >
                <MiniCards>
                    <MiniCard nocard title="Team">
                        <li>2 Front-end</li>
                        <li>2 Back-end</li>
                        <li>1 DevOps, 1 PM</li>
                        <li>1 Product Manager</li>
                    </MiniCard>
                    <MiniCard nocard title="Role">
                        <li>UX Lead</li>
                    </MiniCard>
                    <MiniCard nocard title="Market">
                        <li>Middle East</li>
                        <li>North Africa</li>
                    </MiniCard>
                </MiniCards>
            </Card>
        </header>
        <section>
            <Card 
            subtitle="What we know"
            description="MLOps"
            >
                <MiniCards>
                    <MiniCard title="Market Size">
                        <li>50B</li>
                    </MiniCard>
                    <MiniCard title="Competitors">
                        <li>X, Y, Z</li>
                    </MiniCard>
                    <MiniCard title="Features">
                        <li>Deploy, monitor, and maintain Machine Learning Models</li>
                    </MiniCard>
                </MiniCards>
            </Card>
            <Card 
            nocard
            subtitle="What we don't"
            description="Credit Risk Decisioning"
            >
                <MiniCards>
                    <MiniCard nocard title="Market Size">
                        <li>50B</li>
                    </MiniCard>
                    <MiniCard nocard title="Competitors">
                        <li>X, Y, Z</li>
                    </MiniCard>
                    <MiniCard nocard title="Features">
                        <li>Deploy, monitor, and maintain Machine Learning Models</li>
                    </MiniCard>
                </MiniCards>
            </Card>
            <h3><Link scroll={false} href="#top">↑ Top</Link></h3>
        </section>
    </article>
}

export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:3000/api/products`)
    const products = await res.json()
    return{
        props: {
            products,
        },
    }
}