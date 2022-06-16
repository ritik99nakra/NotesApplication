import axios from 'axios';
import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, Cardtitle, Card, CardTitle } from 'reactstrap'





function Login() {
   let navigate=useNavigate();
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [loginStatus,setLoginStatus]=useState(false);
    
    const registerHandler=()=>{
      navigate("/register")
    }
    

    // Sending request to Node
    axios.defaults.withCredentials=true;
    const login=()=>{
        axios.post('http://localhost:3001/login',{
            email:email,
            password:password,
        }).then((response)=>{
          
          if(response.data.auth){
            console.log(response.data);
            localStorage.setItem("token",response.data.token)
            localStorage.setItem("id",response.data.result[0].id)
            setLoginStatus(true)
            navigate('/home');
          }
          else{
           
            setLoginStatus(false)
          }
    
          
        });
      }

  return (
    
    <div  className="align-items-center " style={{width:"30%",textAlign:"center",marginTop:"185px",marginLeft:"40%"}}>
      <div className="Login" style={{border:"3px solid black"}}>
            <Card className='border p-3' style={{backgroundColor:"whitesmoke"}}>
              <CardTitle style={{fontFamily:"cursive"}}><h2 >&nbsp;&nbsp;Login</h2></CardTitle>
              <br/>
        <Form className="form" >
          <FormGroup>
            {/* <Label for="exampleEmail">Username</Label> */}
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
                
            />
          </FormGroup>
          <FormGroup className='mt-3'>
            {/* <Label for="examplePassword">Password</Label> */}
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
              onChange={(e)=>{
                setPassword(e.target.value)}}
            />
          </FormGroup>
          <br></br>
        <Button onClick={login} id = 'btn' color="success">Login</Button>
        <Button onClick={registerHandler} id = 'btn'color="primary" style={{marginLeft:"15px"}}>Register</Button>
      </Form>

      </Card>

      
    </div>
    </div>
  )
}

export default Login






















{/* <div style={{
  
  
	backgroundImage:'url("https://www.teahub.io/photos/full/198-1989210_books-pen-and-laptop.jpg")',
	backgroundRepeat:'no-repeat',
	width:'100%',
  height:'100vh',

	
	backgroundSize:'cover'
	
  }}> */}
	