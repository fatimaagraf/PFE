import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar";


function Register(params) {
    let navigate=useNavigate()
    
    
    const [name,setName]=useState('')
    const [email,setEmail]=useState('') 
    const [password,setPassword]=useState('')
    const formSubmit= (e)=>{
    
        e.preventDefault()
axios.post('http://localhost:9000/user',{
    name,email,password}).then((res)=>navigate('/login')
    )
       
    }
 
   
   return(<><Navbar></Navbar>
  
   <div className="loginp">
     <h1>Register</h1>
 <form onSubmit={formSubmit}>

<label>name</label><br></br><br></br>
<input    type="text" onChange={(e)=>setName(e.target.value)}/>
<br/><br/>
<label>email</label><br></br><br></br>
<input type="email"    onChange={(e)=>setEmail(e.target.value)}/>

<br/><br/>
<label>password</label><br></br><br></br>
<input type="password"  onChange={(e)=>setPassword(e.target.value)}/>
<br></br><br></br>
<br></br>
<button type="submit">Register</button>

<br></br><br></br>
 </form>
 </div>
</>)
}
export default Register