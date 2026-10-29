import React from 'react'
import { useNavigate } from "react-router";

function Login() {
const navigate = useNavigate();

    function handlelogin (e){
     e.preventDefault()
     console.log("login");
     navigate("/dashboard")
     
    }
  return (
    <div>
        <h1> login</h1>
        <form action="" onSubmit={handlelogin}>
            <input type="text" name="username" id="" />
            <br />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login