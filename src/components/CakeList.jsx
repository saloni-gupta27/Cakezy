import React, { useEffect, useState } from "react";
import Cake from "./Cake";
import Carousel from "./Carousel";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const CakeList = () => {
  let [cakes, setCakes] = useState("");
  const dispatch = useDispatch();
  const cakeList = useSelector(state=>state.CakeList.cakes)
  useEffect(() => {
    if (cakeList.length){
      setCakes(cakeList);
    }
    else{
    axios({
      method: "get",
      url: import.meta.env.VITE_APP_BASE_APIURL + "allcakes",
    })
      .then((res) => {
        setCakes(res.data.data);
        dispatch({
          type:'GET_CAKELIST',
          payload: res.data.data
        })
      })
      .catch((error) => {
        console.log("Error from all cakes api", error);
      });
    }
  }, []);

  return (
    <>
      <Carousel />
      <div className="container-fluid my-3">
        <div className="row gap-3" style={{ justifyContent: "center" }}>
          <Cake cakes={cakes} />
        </div>
      </div>
    </>
  );
};

export default CakeList;
