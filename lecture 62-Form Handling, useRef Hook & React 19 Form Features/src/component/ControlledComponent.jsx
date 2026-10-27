import { useState } from 'react'


function Controlledcomponent() {
  let [form, setForm] = useState({name : "sahil", email: "sahil@gmail.com" , password: ""})
 
 function signup(e) {
  e.preventDefault()
  console.log(form );
  
 }
      

   function handleinput(e){
    const {name, value} = e.target;

    setForm( (prev) => ({...prev, [name] : value}) )
   
   }
    console.log("re-render");


    

  return (
    <div>
      <h1>Form in React (ControlledComponent) - {form.name}</h1>


      <form action="" onSubmit={signup}>
        <label htmlFor="name">Name : </label>
        <input value= {form.name} type="text" name="name" id="name" onInput={handleinput} />
        <br />
           <label htmlFor="email">Email : </label>
        <input value= {form.email} type="text" name="email" id="email"onInput={handleinput} />
        <br />
           <label htmlFor="password">Password : </label>
        <input type="text" name="password" id="password" onInput={handleinput} />
        <br />
        <button>submit</button>
      </form>

    </div>
   
  )
}

export default Controlledcomponent
