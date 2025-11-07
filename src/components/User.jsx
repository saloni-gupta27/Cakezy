import React from 'react'

const User = ({users,deleteUser}) => {
  return (
    <div className='mt-3'>
      <h2>Users</h2>
      {users.map((item,index)=>(
        <div key={index} className='row m-3'>
        <h5 className='col-10'>{item.name} &nbsp; {item.email}</h5>
        <button className='col-2 btn btn-danger' onClick={()=>deleteUser(index)}>delete</button>
        </div>
      ))}
    </div>
  )
}

export default User
