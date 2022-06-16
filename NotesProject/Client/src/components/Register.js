import React, { useState } from 'react'
import axios from 'axios';

function Register() {

  const [user,setUser] = useState();
    const handler=(e)=>{
        console.log(user);
        postdata(user);
        e.preventDefault();
    }

    const postdata = (data) => {
      axios.post(`/register`, data).then(
          (response) => {
              console.log(response);
              alert("success");
          },
          (error) => {
              console.log(error);
          }
      );
  };

  return (
    <div>
      <h1>Register</h1>
      <form>
          <label>Name</label>
          <input id="name" type="text" onChange={(e) => {
                                setUser({ ...user, name: e.target.value });
                            }} /><br/>
          <label>Email</label>
          <input id="email" type="email" onChange={(e) => {
                                setUser({ ...user, email: e.target.value });
                            }} /><br/>
          <label>password</label>
          <input id="password" type="password" onChange={(e) => {
                                setUser({ ...user, password: e.target.value });
                            }} /><br/>
          <label>Phone</label>
          <input id="phone" type="number" onChange={(e) => {
                                setUser({ ...user, phone: e.target.value });
                            }} /><br/>
          <button onClick={handler}>Submit</button>

      </form>
    </div>
  )
}

export default Register

