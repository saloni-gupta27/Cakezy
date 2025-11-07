import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const loc = useLocation();
  // console.log(loc);
  var isloggedin = useSelector((state) => state.Auth.isloggedin);
  var cartItem = useSelector((state) => state.Cart.cartItemQuantity);
  console.log(cartItem)
  const token = localStorage.getItem('token')
  const [search,setSearch] = useState('');
  const handleChange =(e)=>{
    setSearch(e.target.value)
  }

  return (
    <div
      className=""
      style={{ position: "relative", top: "0px", left: "0px", width: "100vw" }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
            
            <form className="form-inline my-2 my-lg-0 d-flex ">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleChange}/>
            <Link to={`/cake/search/?q=${search}`} className="mx-2">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=>setSearch('')}>Search</button>
            </Link>
            </form>
            <form className="d-flex">

              <Link to="/cart" className="mx-2">
                <button className="btn btn-outline-dark text-light">
                  Cart
                  <span className="position-relative top-10 badge rounded-pill bg-danger">
                    {token && loc.pathname=='/cart' ? cartItem: ''}
                  </span>
                </button>
              </Link>
              {loc.pathname == "/signup" && loc.pathname != "/" && (
                <Link to="/login">
                  <button className="btn btn-outline-light" type="submit">
                    Login
                  </button>
                </Link>
              )}
              {loc.pathname == "/login" && loc.pathname != "/" && (
                <Link to="/signup">
                  <button className="btn btn-outline-light" type="submit">
                    Signup
                  </button>
                </Link>
              )}
              {loc.pathname != "/login" && loc.pathname != "/signup" && (
                <Link to="/login">
                  <button
                    className="btn btn-outline-light"
                    type="submit"
                    onClick={() => {
                      localStorage.clear();
                    }}
                  >
                    {`${isloggedin ? "Logout" : "Login"}`}
                  </button>
                </Link>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
