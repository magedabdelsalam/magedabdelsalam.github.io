import Meta from '../../../components/Meta'
import { motion } from "framer-motion";
import styles from '../../../styles/Product.module.css'

export default function product({product}) {
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
    <motion.article
    variants={container}
    initial="hide"
    animate="show"
    exit="exit"
    >
        <Meta title={product.title}/>
        <h1>{product.title}</h1>
        <div dangerouslySetInnerHTML={{__html: product.content}} />
    </motion.article>
    ) 
}

export const getStaticProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/products/${context.params.category}/${context.params.title}`)
    const product = await res.json()
    return{
        props: {
            product,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:3000/api/products/`)
    const products = await res.json()
    const paths = products.map((product) => ({params: {title: product.title.toString(), category: product.category.toString()}}))
    return {
        paths,
        fallback: false
    }
}