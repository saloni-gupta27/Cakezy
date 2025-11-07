import React, { useState } from 'react'
import CakeList from './CakeList'
import Employee from './Employee'
import Admin from './Admin'
import Navbar from './Navbar'
import Login from './Login'

export default function Home (){
    // const [isLoggedin,setIsLoggedIn] = useState(false)
    
  return (
    <div>
      {/* <h1>Home Component</h1> */}
       <CakeList/>
      {/*<Employee/> */}
      {/* <Admin/> */}
      {/* <Navbar isLoggedIn={isLoggedin}/> */}
      {/* <Login setIsLoggedIn={setIsLoggedIn}/> */}
    </div>
  )
}

