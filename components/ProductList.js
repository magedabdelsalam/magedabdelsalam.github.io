import styles from '../styles/Product.module.css'
import { motion } from 'framer-motion';
import ProductItem from './ProductItem'

const ProductList = ({products}) => {
    const container = {
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
				staggerChildren: 0.1
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
        <section>
            <h2>Products</h2>
            <motion.div
            variants={container}
            initial="hide"
            animate="show"
            exit="exit"
            className={styles.product}
            >
                {products.map((product) => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </motion.div>
        </section>
    )
}

export default ProductList