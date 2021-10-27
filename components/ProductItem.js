import styles from '../styles/Product.module.css'
import { motion } from 'framer-motion';
import Link from 'next/link'

const ProductItem = ({product}) => {
    const item = {
        hide: { 
            opacity: 0,
            x: "60px",
            transition:{
                duration: 0.3,
            }
        },
        show: { 
            opacity: 1,
            x: "0px",
            transition:{
                duration: 0.3,
            }
        },
        exit: { 
            opacity: 0,
            x: "-60px",
            transition:{
                duration: 0.3,
            }
        },
    }
    return (
        <motion.div variants={item} className={styles.product}>
            <div className={styles.photo}>
                <img src={product.photo} alt={product.author}/>
            </div>
            <Link href={`/${product.category}`}>
                <a className={styles.category}>
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </a>
            </Link>
            <Link href={`/${product.category}/${product.title}`}>
                <a className={styles.content}>
                    <h2 className={styles.title}>{product.title}</h2>
                    <p className={styles.subtitle}>{product.subtitle}</p>
                    <img className={styles.thumbnail} src={product.thumbnail} alt={product.title}/>
                </a>
            </Link>
        </motion.div>
    )
}

export default ProductItem