import Products from '../components/Products'
import Link from 'next/link'


export default function Home({products}) {
    return <section>
        <h3>Work</h3>
        <Products products={products}/>
        <h3><Link scroll={false} href="#top">↑ Top</Link></h3>
    </section>
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