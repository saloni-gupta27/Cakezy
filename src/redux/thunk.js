import axios from 'axios';
import {getCartItems, removefromcart} from "../redux/cartslice.js"


export function getCartThunk (){
  return function(dispatch){
    axios({
        method: "get",
        url: import.meta.env.VITE_APP_BASE_APIURL + "cakecart",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
    })
        .then((response) => {
          console.log("cartdata", response.data.data);
          dispatch(getCartItems(response.data.data))
        })
  }
    
}
export function removeFromCartThunk (id){
  return function(dispatch){
    axios({
        method: "post",
        url: import.meta.env.VITE_APP_BASE_APIURL + "removecakefromcart",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data:{cakeid:id}
    })
        .then((response) => {
          console.log("removed item", response.data.data);
          dispatch(removefromcart(id));
        })
  }
    
}