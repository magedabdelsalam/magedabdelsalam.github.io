import { products } from '../../../../data'

export default function handler({query : {category,title}}, res) {
  const filtered = products.filter((product) => product.title === title && product.category === category)

  if(filtered.length > 0){
      res.status(200).json(filtered[0])
  } else {
      res.status(404).json({message: `Product with the title of ${title} is not found`})
  }
}
