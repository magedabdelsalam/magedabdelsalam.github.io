import styles from '../styles/Card.module.css'
import Product from './Product'

export default function Products({products}){
    return <div className={styles.cards}>
                {products.map((product) => (
                    <Product key={product.id} product={product}/>
                ))}
        </div>
}