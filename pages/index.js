import Product from '../components/Product'
import styles from '../styles/Card.module.css'
import Link from 'next/link'


export default function Home({data}) {
    return <section>
        <h3>Work</h3>
        <div className={styles.cards}>
                {data.map((data) => (
                    <Product key={data.id} data={data}/>
                ))}
        </div>
        <h4><Link scroll={false} href="#top">↑ Top</Link></h4>
    </section>
}

export const getStaticProps = async () => {
    const res = await fetch(`http://127.0.0.1:3000/api/data`)
    const data = await res.json()
    return{
        props: {
            data,
        },
    }
}