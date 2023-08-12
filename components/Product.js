import Link from 'next/link'
import Card from '../components/Card'

export default function Product({product}){
    return (
        <Link href={product.url}>
            <a>
                <Card 
                subtitle={product.title} 
                description={product.description}
                img={product.thumbnail}
                link={product.url}
                />
            </a>
        </Link>
    )
}