import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { TextField, Button } from '@mui/material';
import {useNavigate} from 'react-router-dom'

const Login = () =>{

  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
  const {setToken} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogin = (email,pass) => {
    const data = {
      email,
      password : pass
    }
    fetch(`https://reqres.in/api/login` ,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "content-Type" : "application/json"
            }
        }).then((res) => res.json())
        .then((res) => { setToken(res);
          navigate('/home')
        })
  }

  return (
    <div style={{ border: "1px solid #cecece", width: "50%", margin: "20px auto" }}>
      <h1>Login</h1>
      <TextField value={email} onChange={(e) =>setEmail(e.target.value) } id="outlined-basic" label="Email" variant="outlined" /><br /><br />
      <TextField value={pass} onChange={(e) =>setPass(e.target.value) } id="outlined-basic" label="Password" variant="outlined" /><br /><br />
      <Button onClick={() =>handleLogin(email,pass)} variant="contained">Log in</Button>
    </div>
  )
};

export default Login;
