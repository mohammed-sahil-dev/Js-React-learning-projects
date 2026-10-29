import { useEffect, useState } from "react";
import axios from "axios";

function Timer (){

  useEffect(() => {

    //  setInterval(() => {
    //   console.log("timer");
      

    //  },1000)

      return () => {
        console.log("timer clean up");
        
      }
  })
  return <div>
    <h2>Timer component</h2>
  </div>
}


function App() {

  const [productcount, setproductCount] = useState(0);
  const [name, setName] = useState(0);
  const [product, setproduct] = useState([]);
  const [showTimer, setshowTimer] = useState(true);

  // console.log(productcount);
  // console.log("list");
  
  
  useEffect(() => {
    // fetch("https://dummyjson.com/products?limit=0")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     // setproductCount(data.total);
    //     setproduct(data.products);

    //   })

    async function  getProducts() {
      // let response = await  fetch("https://dummyjson.com/products?limit=0");
      // let data = await response.json()

     let {data} = await axios.get("https://dummyjson.com/products?limit=0")
     
     
      setproductCount(data.total)

      setproduct(data.products);
    }
  
    

      getProducts()

        console.log("h");

    return function (){
       console.log("clean up fun");
       
    }
  },[name])


  return (
    
    <div>
      {showTimer && <Timer/>}
      <button onClick={() => setshowTimer((prev) => !prev)}>Toggle Timer Component</button>
      <br />
      <br />
      product - {productcount}
      <input type="text" onInput={(e) => setName(e.target.value)} />
        <ul>
          {
            product.map((p) =><li key={p.id}>{p.title}</li>)
          }
        </ul>
    </div>
  )
}

export default App
