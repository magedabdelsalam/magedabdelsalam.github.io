import lexion from '../assets/boomspace_2.jpg'

const products = [
    {
        title: 'ChoiceMap',
        description: 'Patient-Provider shared decision-making.',
        photo: lexion,
        link: '',
    },
    {
        title: 'Lexion',
        description: 'AI for lawyers',
        photo: lexion,
        link: '',
    },
    {
        title: 'Heircut',
        description: 'Barbershop Experience Reimagined',
        photo: lexion,
        link: '',
    },
    {
        title: 'Heircut',
        description: 'Barbershop Experience Reimagined',
        photo: lexion,
        link: '',
    },
]

const Products = () => {
    return(
        <div className='products'>
            {products.map((product) => (
                <div className='product'>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <img src={product.photo} alt=''/>
                </div>
            ))}
        </div>
    )
}

export default Products;