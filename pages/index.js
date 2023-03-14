// Components
import ProductList from '../components/ProductList'

export default function Home({products}) {
    return <ProductList products={products}/>
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