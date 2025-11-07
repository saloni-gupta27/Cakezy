import React from "react";
import { useNavigate } from "react-router-dom";

const Cake = ({ cakes }) => {
  const navigate = useNavigate();
  // let Tag;
  // if (cakes.tag) {
  //   Tag = <h5 className="alert alert-success">best selling</h5>;
  // } else {
  //   Tag = null;
  // }

  if (cakes)
    return (
      <>
        {cakes.map((item, index) => (
          <div
            className="card align-center"
            style={{ width: "20rem" }}
            key={index} onClick={()=>navigate(`/cake/${item.cakeid}`)}
          >
            <img
              src={item.image}
              className="card-img-top mt-2"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">Rs.{item.price} </p>
              {/* {Tag}
        <a href="#" className="btn btn-primary" onClick={()=>applyDiscount(10)}>
          Add
        </a>
        {data.tag ? <div>Best seller</div> : <></>} */}
            </div>
          </div>
        ))}
      </>
    );
  else 
  return (
    <div>Loading...</div>
  );
};

export default Cake;
