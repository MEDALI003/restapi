import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../JS/Actions/userActions';
import { useEffect, useState } from 'react';

function Navb() {
  const dispatch=useDispatch()
  const Navigate=useNavigate()
  const conn=useSelector(state=>state.userReducer.user)
  const [style,setStyle]=useState({display:"none"})
  useEffect(() => {
    conn ? setStyle({ display: "flex" }) : setStyle({ display: "none" });
  }, [conn]);
  
  const handlelogout=()=>{
    dispatch(logout())
    Navigate("/login")
  }
 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            
            <Button onClick={handlelogout} style={style}>Logout</Button>
<div style={conn?{display:"none"}:{display:"flex"}}> <Link to={"/register"} ><Button>register</Button></Link><Link to={"/login"}><Button>login</Button></Link></div>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;