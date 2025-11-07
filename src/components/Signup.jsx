import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [user, setUser] = useState({
       name:"", email: "",
        password: "",
      });
      const handleChange = (e) =>{
        setUser({...user,[e.target.id]:e.target.value})
       
      }
      useEffect(()=>{
        console.log(user)
      },[user])

      function createAccount(){
        axios(
            {
                url:import.meta.env.VITE_APP_BASE_APIURL + "register",
                method:"post",
                data:user
            }
        ).then((response)=>{
            console.log("response from signup api " , response.data);
        }).catch((error)=>{
            console.log("Error from signup api" , error)
        })
    }

  return (
       <div className="container-fluid m-5 w-50" >
        <h1 className='mb-3'>Create Account</h1>
        <div className="mb-3 row">
        <label htmlFor="name" className="col-sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="email@example.com"
            value={user.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="password" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-8">
          <input
            type="password"
            className="form-control"
            id="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
      <button className="btn btn-dark btn-sm" onClick={createAccount}>Register</button>
      </div>
      <div>
      <div className="my-3"></div>
      <Link to="/login" className='h6 text-primary'>Already a user? Login</Link>
      </div>
    </div>
  )
}

export default Signup
