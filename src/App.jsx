import "./App.css";
import Admin from "./components/Admin";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import CakeDetails from "./components/CakeDetails";
import SearchCake from "./components/SearchCake";
import Cart from "./components/Cart";

function App() {
  const [isLoggedin,setIsLoggedIn] = useState(false)
 const [cartItems,setCartItems] = useState([])
  useEffect(()=>{
    
    localStorage.clear()
  },[])
  return (
  <>
  <BrowserRouter>
  <Navbar isLoggedIn={isLoggedin}/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/cake/:cakeid" element={<CakeDetails cartItems={cartItems} setCartItems={setCartItems}/>}/>
  <Route path="/cake/search" element={<SearchCake/>}/>
  <Route path="/cart" element={<Cart cartItems={cartItems} />}/>
  <Route path="/admin" element={<Admin/>}/>
  <Route path="/*" element={<PageNotFound/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;
