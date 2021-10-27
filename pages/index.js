// Components
import ProductList from '../components/ProductList'

export default function home({products}) {
    return(
        <div>
            <ProductList products={products}/>
        </div>
    )
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