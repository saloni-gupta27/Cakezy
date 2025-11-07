import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addtocart } from "../redux/cartSlice.js";
import { useDispatch } from "react-redux";

const CakeDetails = ({ cartItems, setCartItems }) => {
  const param = useParams();
  const navigate = useNavigate();

  const [cake, setCake] = useState({});
  const { name, cakeid, price, image, weight } = cake;

  const dispatch = useDispatch();

  const addToCart = () => {
    axios({
      method: "post",
      url: import.meta.env.VITE_APP_BASE_APIURL + "addcaketocart",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      data: { name, cakeid, price, image, weight },
    })
      .then((response) => {
        dispatch(addtocart(response.data.data));
        //setCartItems([...cartItems,cake]);
        navigate("/cart");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    axios({
      method: "get",
      url: import.meta.env.VITE_APP_BASE_APIURL + "cake/" + param.cakeid,
    }).then((response) => {
      setCake(response.data.data);
    });
  });

  return (
    <div className="row my-5" style={{ justifyContent: "center" }}>
      <div
        className="col-6 mx-5 p-0 card align-center"
        style={{ width: "30rem" }}
      >
        <img
          src={cake.image}
          style={{ width: "30rem" }}
          className="card-img-top"
          alt="..."
        />
      </div>
      <div className="mx-auto text-center my-3">
        <h1 className="card-title mb-3">{cake.name}</h1>
        <h4 className="card-text">Rs.{cake.price} </h4>
      </div>
      <button className="btn col-2 btn-secondary" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default CakeDetails;
