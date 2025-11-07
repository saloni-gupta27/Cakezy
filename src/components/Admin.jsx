import React, { useState } from "react";
import User from "./User";

const Admin = () => {
    const [user,setUser] = useState({
        "name":"","email":""
    })
    let [users,setUsers] = useState([]);

    
    const handleChange = (e) =>{
        console.log(e.target.value);
        setUser({...user,[e.target.id]:e.target.value});
        console.log(user)
    }

    const handleUser = (e) =>{
        e.preventDefault();
        setUsers(prevUsers => [
            ...prevUsers,
            {
              name: user.name,
              email: user.email,
              
            }
          ]);
       console.log(users)
       setUser({
        name:'',email:""
       })
    }
    
    const deleteUser =(id)=>{
        const usersCopy = [...users];
        usersCopy.splice(id, 1);
        setUsers(usersCopy)
    //    setUsers(() => users.splice(id,1))
        //setUsers(prevUsers => prevUsers.filter(u => prevUsers.indexOf(u) !== id));
    }

    

  return (
    <div className="container-fluid">
        <h1>Admin Form</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="name"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          value={user.email}
          onChange={handleChange}
         
        />
      </div>
        <button type='submit' className="btn btn-primary" onClick={handleUser}>Add User</button>
      <User users = {users} deleteUser={deleteUser}/>
    </div>
  );
};

export default Admin;
