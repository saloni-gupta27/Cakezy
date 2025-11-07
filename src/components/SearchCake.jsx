import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const SearchCake = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [cakes,setCakes] = useState([])
    const searchText = searchParams.get('q') || '';
    useEffect(()=>{
        axios({
            method:'get',
            url:import.meta.env.VITE_APP_BASE_APIURL +"searchcakes?q="+searchText,
        })
        .then((response)=>{
            console.log("resuls of search api" , response.data.data)
            setCakes(response.data.data)
        })
    })
  

  return (
    <div>

    <h3 className='mx-3 my-3'>Search Results for {searchText}</h3>
    <div className='row gap-2 mx-3' style={{justifyContent:'center'}}>
      
      {cakes?.map((item, index) => (
          <div
            className="card align-center"
            style={{ width: "25rem" }}
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
             
            </div>
            
          </div>
        ))}
    </div>
    </div>
  )
}

export default SearchCake
