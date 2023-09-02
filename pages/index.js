import Products from '../components/Products'
import Link from 'next/link'

export default function Home({data}) {
    return <section>
        <h3>Work</h3>
        <Products data={data}/>
        <h4><Link scroll={false} href="#top">↑ Top</Link></h4>
    </section>
}

export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:3000/api/data`)
    const data = await res.json()
    return{
        props: {
            data,
        },
    }
}