import styles from '../styles/Card.module.css'
import Product from './Product'

export default function Products({data}){
    return <div className={styles.cards}>
                {data.map((data) => (
                    <Product key={data.id} data={data}/>
                ))}
        </div>
}