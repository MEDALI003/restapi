import React, { useEffect, useState } from 'react'
import "./Login.css"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../JS/Actions/userActions'
import { toast } from 'react-toastify'
import Button from 'react-bootstrap/esm/Button'
const Login= () => {
const [user,setUser]=useState({})
const dispatch=useDispatch()
const Navigate=useNavigate()
const conn=useSelector(state=>state.userReducer.user)
useEffect(()=>{
  if (conn!==null) {
    Navigate("/profile")
  }
},[conn])
const handleChange=(e)=>{

setUser({...user,[e.target.name]:e.target.value})
}
const handleClick=()=>{
  if(user?.password&&user?.email){
  dispatch(login(user))
}


else{
  toast("u must add data")
}
}
  return (
    <div>
        <div className="login-page">
  <div className="form">
    <form className="login-form">
    <input type="text" name='email' placeholder="email address" onChange={(e)=>handleChange(e)}/>
      <input type="password" name='password' placeholder="password" onChange={(e)=>handleChange(e)} />
      
      <Button onClick={()=>handleClick()}>sign in</Button>
      
    </form>
    
  </div>
</div>
    </div>
  )
}

export default Login
