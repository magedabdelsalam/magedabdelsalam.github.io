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
                <img src="/photo_1.png" alt="Maged Abdelsalam"/>
            </div>
            <Link href={product.url}>
                <a className={styles.card}>
                    <h2 className={styles.title}>{product.title}</h2>
                    <p className={styles.description}>{product.description}</p>
                    <img className={styles.thumbnail} src={product.thumbnail} alt={product.title}/>
                </a>
            </Link>
        </motion.div>
    )
}

export default ProductItem