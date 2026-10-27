import React from 'react'

export const UncontolledComponents = () => {

    

    function signup (e){
        e.preventDefault();
        // console.log("submit form");
        let formdata = new FormData(e.target)
        console.log(Object.fromEntries(formdata));
        
        
    }
    // console.log(render); no  re-render in  UncontrolledComponets
    
  return (
    <div>
        <h1>Form in React (UncontolledComponents)</h1>
        <form action="" onSubmit={signup}>
            <label htmlFor="name">Name : </label>
            <input   type="text" name="name" id="name" />
            <br />
            <label htmlFor="email">Email :  </label>
            <input type="text" name="email" id="email" />
            <br />
            <label htmlFor="password">Password : </label>
            <input type="text" name="password" id="password" />
            <br />
            <button>submit</button>
        </form>
    </div>
  )
}
