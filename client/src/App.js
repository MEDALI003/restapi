import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './Components/Navb';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { current } from './JS/Actions/userActions';
import Error from './Components/Error';
function App() {
  const dispatch=useDispatch()
  const user=useSelector(state=>state.userReducer.user)
  const Navigate=useNavigate()
  const fix=0
  useEffect(()=>{
    dispatch(current())
  },[fix,dispatch])
  return (
    <div className="App">
    <Navb />
    <Routes>
      <Route path='/' element={<Home />} />
      {<Route path='/login' element={<Login />} />}
      <Route path='/Register' element={<Register />} />
      {user?<Route path='/profile' element={<Profile />} />:null}
      
 
    </Routes>

    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
{/* Same as */}
<ToastContainer />
    </div>
  );
}

export default App;
