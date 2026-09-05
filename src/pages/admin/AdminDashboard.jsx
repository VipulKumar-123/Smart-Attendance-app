import React, { useEffect } from 'react'
import { useState } from 'react';

const AdminDashboard = () => {

  // const user = {
  //   id: 0,
  //   username: "abhishek",
  //   email: "abhi@gmail.com",
  //   password: "admin@123",
  // };

  // //api call
  // const createUser = async () => {
  //   const config = {
  //     method: "POST",
  //     header: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(user),
  //   }
  //   const response = await fetch("https://fakestoreapi.com/users", config);
  //   const data = response.json();
  //   console.log(response);
  //   console.log(data)
  // };
  

  // const [users, setUsers] = useState([])

  // const getUsers = async () => {
  //   const response = await fetch("https://fakestoreapi.com/users", {
  //     method: "GET"
  //   });

  //   console.log(response);
  //   const data = await response.json();
  //   setUsers(data);
  // };


  // useEffect(() => {
  //   getUsers();
  // }, [])


  return (
    <div>
<div className='text-4xl'>AdminDashBoard</div>
      {/* <h1>
        AdminDashboard
      </h1>
      <button onClick={createUser}>create User</button>
      {
        users.map((user) => {
          return <p
          key={user.id}
          >{user.username}</p>

        })} */}
    </div>
  );
};

export default AdminDashboard;




