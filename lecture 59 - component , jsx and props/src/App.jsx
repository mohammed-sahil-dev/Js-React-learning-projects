
import { Footer } from "./components/Footer"
import Navbar from "./components/Navbar";
import { Product } from "./components/product";
import Products from "./components/products";



const products = [
  {
     title :"shoes",
     price : 1499
  } , 
  {
    title : "t-shrit",
    price :599
  }, 
  {
    title : "pent",
    price : 799
  }
];

function App() {
  return (
    <div>
    
      <Navbar/>
    <h1>hii</h1>
    <Products products = {products}/>
      <Footer/>  
    </div>
  )
 
}

export default App
