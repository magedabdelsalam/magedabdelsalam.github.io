import Link from 'next/link'
import Card from '../components/Card'

export default function Product({data}){
    return (
        <Link href={data.url}>
            <a>
                <Card 
                subtitle={data.title} 
                description={data.description}
                img={data.thumbnail}
                link={data.url}
                />
            </a>
        </Link>
    )
}