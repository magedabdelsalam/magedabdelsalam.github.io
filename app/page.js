import Product from 'components/Product'
import styles from 'styles/Card.module.css'

/*
TODO: 
1. Add ChoiceMap to portfolio
2. Add SUI to portfolio
*/

async function getWork(){
    const res = await fetch(`http://127.0.0.1:3000/api/data`,{ cache: 'force-cache' })
    const work = await res.json()
    return work
}

export default async function Home() {
    const work = await getWork()
    return <section>
        <h3>Work</h3>
        <div className={styles.cards}>
                {work.map((work) => (
                    <Product key={work.id} work={work}/>
                ))}
        </div>
    </section>
}

