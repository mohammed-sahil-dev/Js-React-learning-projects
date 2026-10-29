import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Link, Outlet, Route, Routes, useParams } from "react-router";
import NotFoundPage from './Components/NotFoundPage'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'



function App() {
     


  function Home() {
    return <div>
      <h2>Home</h2>
    </div>
  }

  function Product() {
    const param = useParams()
    console.log(param);
    
    return <div>
      <h2>Product Details</h2>
    </div>
  }


  function AboutUs() {
    return <div>
      <h2>About Us</h2>
    </div>
  }

  function Navbar() {
    return <>
      <ul>
         <Link to ={ "/"} >Home</Link>
         <br />
        <Link to = {"/product-page"} >Product Page </Link>
        <br />
        <Link to = {"/about-us"}>About Us</Link>
        <br />
        <Link to = {"/Login"}>Login</Link>

      </ul>
      <Outlet />
    </>
  }


  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route path='/' element={<Home />} />
        <Route path='product-page/:id/:title' element={<Product />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/dashboard' element={<Dashboard />} />
       
      </Route>

      <Route path='*' element={<NotFoundPage />} />
       <Route path='/Login' element={<Login/>} />

    </Routes>
  )
}

export default App
