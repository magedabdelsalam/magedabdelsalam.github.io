import styles from '../styles/Product.module.css'
import { motion } from 'framer-motion';
import Link from 'next/link'
import Image from 'next/image'

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
                <Image
                src="/photo_1.png"
                alt="Maged Abdelsalam"
                height={84}
                width={60}
                />
            </div>
            <Link href={product.url} className={styles.card}>
                    <h2 className={styles.title}>{product.title}</h2>
                    <p className={styles.description}>{product.description}</p>
                    <Image
                    className={styles.thumbnail}
                    src={product.thumbnail}
                    alt={product.title}
                    height={240}
                    width={550}
                    />
            </Link>
        </motion.div>
    )
}

export default ProductItem