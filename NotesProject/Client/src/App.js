import React from 'react'
import axios from 'axios';
import Header from './components/Header';
import Login from './components/Login';
import Registration from './components/Registration';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Createnotes from './components/Createnotes';
import Allnotes from './components/Allnotes';
import Update from './components/Update';

function App() {
  return (
    <div>
      <Router>
        
        <Routes>
          <Route path="/home" element={<Home/>} exact />
          <Route path='/' exact element={<Login/>}></Route>

           <Route path="/register" element={<Registration/>}></Route>
           <Route path="/profile" element={<Profile/>}></Route>
           <Route path="/addnotes" element={<Createnotes/>}></Route>
           <Route path="/shownotes" element={<Allnotes/>}></Route>
           <Route path="/updateNo" element={<Update/>}></Route>

        </Routes>


      </Router>
      
    </div>
  )
}

export default App









{/*
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Login from './components/Login';
import Registration from './components/Registration';



function App() {

  const [usernameReg,setUsernameReg]=useState("");
  const [passwordReg,setPasswordReg]=useState("");

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const [loginStatus,setLoginStatus]=useState(false);
  
  axios.defaults.withCredentials=true;
  const register=()=>{
    axios.post('http://localhost:3001/register',{
        username:usernameReg,
        password:passwordReg,
    }).then((response)=>{
      console.log(response);
    });
  }

  const login=()=>{
    axios.post('http://localhost:3001/login',{
        username:username,
        password:password,
    }).then((response)=>{
      
      if(response.data.auth){
        console.log(response.data);
        localStorage.setItem("token",response.data.token)
        
        setLoginStatus(true)
      }
      else{
       
        setLoginStatus(false)
      }

      
    });
  }
      useEffect(()=>{
            axios.get("http://localhost:3001/login").then((response)=>{
              if(response.data.loggedIn==true){
              setLoginStatus(response.data.user[0].username);
              }
              console.log(response);
            })
      },[])
  const userAuthenticated=()=>{
    axios.get("http://localhost:3001/isUserAuth",{
      headers:{
        "x-access-token": localStorage.getItem("token"),
      },

    }).then((response)=>{
      console.log(response);
    })
  }

   
  return (
    <>
    <Header/>
    <br/>
    <Login/>
    <br/><br/>
    <Registration/>
    
    <div className='justify-content-center align-items-center ' style={{marginLeft:"400px"}}>
      <div className='registration text-center'>
        <h1>Register</h1>
        <label for="username" >username</label><br></br>
        <input type="text" onChange={(e)=>{
          setUsernameReg(e.target.value)
        }}/><br/>
        <label for="password">password</label><br/>
        <input type="text" onChange={(e)=>{
          setPasswordReg(e.target.value)
        }}></input><br/>
        <button onClick={register}>Register</button><br/>
      </div>


      <div className='login text-center'>
         <h1>Login</h1><br/>
         <input type="text" placeholder='username' onChange={(e)=>{
          setUsername(e.target.value)
        }}/><br/>
         <input type="password" placeholder='password' onChange={(e)=>{
          setPassword(e.target.value)
        }}/><br/>
         <button onClick={login}>Login</button>
        
      </div>
      <div>{loginStatus}</div>
      {loginStatus && (
        <button onClick={userAuthenticated}>check authenticated</button>
      )}
    </div>
    </>
  );
}

export default App;
*/}



