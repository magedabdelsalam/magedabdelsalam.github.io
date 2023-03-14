import styles from '../styles/Product.module.css'
import { motion } from 'framer-motion';
import Link from 'next/link'
import Image from 'next/image'

export default function ProductItem({product}){
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
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <Link href={product.url}>
                        <h2>{product.title}</h2>
                    </Link>
                    <p>{product.description}</p>
                </div>
                <div className={styles.cardBody}>
                    <Image
                    className={styles.thumbnail}
                    src={product.thumbnail}
                    alt={product.title}
                    width={576}
                    height={300}
                    />
                </div>
            </div>
        </motion.div>
    )
}