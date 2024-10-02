import axios from "axios"

const Products = async () => {
  // const deatilsResponse = await axios.get("http://localhost:3001/products/1")
    const products = await axios.get('http://localhost:3001/products',{
      next:{
        revalidate:10,
      }
    })

  return (
    <div>
      {products.data.map(product => <li key={product.id}>
        Product Name:{product.name}
        {product.title}
        <br/>
        {product.price}
        <br/>
        {product.description}
      </li>)}
    </div>
  )
}

export default  Products
