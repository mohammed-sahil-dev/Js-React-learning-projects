import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'

 export let UserContext = createContext(null)

 let username = "sahil";

createRoot(document.getElementById('root')).render(
  <UserContext value = {username}>
    <App />
      <Navbar/>
    </UserContext>
 ,
)
