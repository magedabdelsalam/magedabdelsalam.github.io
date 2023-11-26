import Link from 'next/link'
import Card from '../components/Card'

export default function Product({work}){
    return (
        <Link href={work.url}>
            <Card 
            subtitle={work.title} 
            description={work.description}
            img={work.thumbnail}
            link={work.url}
            />
        </Link>
    )
}