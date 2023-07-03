import Card from '../components/Card'

export default function Product({product}){
    return (
            <Card 
            subtitle={product.title} 
            description={product.description}
            img={product.thumbnail}
            link={product.url}
            />
    )
}