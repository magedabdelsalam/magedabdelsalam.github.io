import Image from "next/image"

export default function KonanAI({products}) {
    var product = products[0]
    return <section>
        <h1>{product.title}</h1>
        <p>This is a paragraph DAWG</p>
        <Image alt='' height={320} width={576} src={product.thumbnail} />
        <h2>Overview</h2>
        <p>This is a paragraph DAWG</p>
        <p>This is a paragraph DAWG</p>
        <p>This is a paragraph DAWG</p>
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