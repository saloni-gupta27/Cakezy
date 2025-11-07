import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginSuccess } from "../redux/actionCreator.js";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };


  function login (){
    axios({
      method:'post',
      url: import.meta.env.VITE_APP_BASE_APIURL+"login",
      data:user
    }).then((res)=> {
      console.log("Response: ",res.data); 
      if(res.data.token){
        localStorage.setItem('token',res.data.token)
        //setIsLoggedIn(true);
        // dispatch({
        //   type:"LOGIN_SUCCESS"
        // })
        dispatch(loginSuccess())
        
        navigate('/');
      }
    })
    .catch((err)=>console.log("Message: ",err.message))
  }

  return (
    <div className="container-fluid m-5 w-50">
        <h1 className="mb-3">Login</h1>
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
      <button className="btn btn-dark btn-sm" onClick={login}>Login</button>
      </div>
      <div className="my-3">
      <Link to="/signup" className="h6 text-primary">New User? Signup</Link>
      </div>
    </div>
  );
};

export default Login;
