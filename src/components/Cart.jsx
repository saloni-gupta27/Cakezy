import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getCartItems} from "../redux/cartSlice.js"
import {getCartThunk, removeFromCartThunk} from '../redux/thunk.js'

const Cart = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const itemsInCart = useSelector(state=>state.CartSlice.cartitems)
  //console.log(cartitems)

  useEffect(() => {
    if (!token) {
      setCartItems([]);
      navigate("/login", { replace: true });
    } else {
      // axios({
      //   method: "get",
      //   url: import.meta.env.VITE_APP_BASE_APIURL + "cakecart",
      //   headers: {
      //     Authorization: localStorage.getItem("token"),
      //   },
      // })
      //   .then((response) => {
      //     console.log("cartdata", response.data.data);
      //     setCartItems(response.data.data);
      //     dispatch(getCartItems(response.data.data))
      //     dispatch({
      //       type: "SET_CART_ITEMS",
      //       payload: response.data.data,
      //     });
     
      //     navigate("/cart");
      //   })
      //   .catch((err) => {
      //     console.log(err.message);
      //   });
       // dispatch(getCartThunk())
      //setCartItems(itemsInCart)

      dispatch({
              type: "SET_CART_ITEMS",
              payload: itemsInCart,
            });
      navigate("/cart", { replace: true });
    }
  }, [navigate,itemsInCart]);
  return (
    <div>
      {token ? (
        <div>
          Your Cart
          {itemsInCart?.map((item, index) => (
            <div
              key={index}
              className="row mx-auto my-5 justify-content-center"
            >
              <div
                className="card col-6 p-0 align-center"
                style={{ width: "20rem" }}
                onClick={() => navigate(`/cake/${item.cakeid}`)}
              >
                <img src={item.image} className="card-img-top" alt="cake" />
              </div>
              <div className="col-6">
                <h5 className="card-title my-3">{item.name}</h5>
                <p className="card-text">Price: Rs.{item.price} </p>
                <p className="card-text">Weight: {item.weight}Kg </p>
                <p className="card-text">quantity: {item.quantity} </p>
                <button className="col-3 btn btn-danger" onClick={()=>{dispatch(removeFromCartThunk(item.cakeid))}}>Remove from cart</button>
              </div>
              
            </div>
          ))}
        </div>
      ) : (
        <div>You need to Login</div>
      )}
    </div>
  );
};

export default Cart;
