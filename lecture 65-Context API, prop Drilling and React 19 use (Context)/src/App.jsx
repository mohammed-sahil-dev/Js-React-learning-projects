import { use, useContext, useState } from 'react'

import './App.css'
import { UserContext } from './main'
import Navbar from './components/Navbar';

function Grandchild(){
    // const value = useContext(UserContext)
    const value = use(UserContext)
    console.log(value);
    
  return ( <div style={{background :"aqua", padding : "14px"}}>
    <h1>GrandChild -{value}</h1>
   
    </div>
  )
}


function Child (){
  return ( <div style={{background :"blue", padding : "15px"}}>
     <h1>child</h1>
     <Grandchild />
 

  </div>
   

  )
}

function Parent (){
  return ( <div style={{background :"green", padding : "15px"}}>
    <h1>parent</h1>
        <Navbar/>
    <Child  />
     
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
   <div style={{background :"purple", padding : "18px"}}>
    <h1>App </h1>
      <Parent />
       
   
   </div>
  )
}

export default App
