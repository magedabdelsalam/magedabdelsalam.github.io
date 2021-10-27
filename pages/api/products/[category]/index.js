import { products } from '../../../../data'

export default function handler({query : {category}}, res) {
  const filtered = products.filter((product) => product.category === category)

  if(filtered.length > 0){
      res.status(200).json(filtered)
  } else {
      res.status(404).json({message: `Product with the category of ${category} is not found`})
  }
}
