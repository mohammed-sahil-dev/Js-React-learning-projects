import { Product } from "./product"


function Products({products})  {
  return (
     <div style={{backgroundColor: "wheat" , color: "black"}}>
          {products.map(({title, price}, i) => {
            return <Product key = {1} title = {title} price = {price} />
          })}
        </div>
  )
}

export default Products
