
import Spinner from 'react-bootstrap/Spinner';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavigationType, useNavigate } from 'react-router-dom';

const Profile = () => {
  const user=useSelector(state=>state.userReducer.user)
  const load=useSelector(state=>state.userReducer.load)
  const navigate=useNavigate()
  useEffect(()=>{
      if(!user){
        navigate("/")
      }
  },[user])
  console.log(user)
  return (
    <div>
      {load?<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>:<div>Profile

<h1>{user?.name}</h1>
</div>}
    </div>
  )
}

export default Profile