// Components
import ProductList from '../../components/ProductList'

export default function category({products}) {
    return(
        <div>
            <ProductList products={products}/>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/products/${context.params.category}`)
    const products = await res.json()
    return{
        props: {
            products,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:3000/api/products/`)
    const products = await res.json()
    const categories = products.map((product) => product.category)
    const paths = categories.map((category) => ({params: {category: category.toString()}}))
    return {
        paths,
        fallback: false
    }
}