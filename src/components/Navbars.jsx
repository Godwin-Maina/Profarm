
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Button  } from 'react-bootstrap';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

//import {Link } from 'react-router-dom'


const Navbars = () => {

  return (
    <Navbar className='m-1 d-flex'  bg="dark" variant='dark' expand="lg" >
    <Container >
<div>
      <Navbar.Brand className=' bg-dark navbar-dark' href="/">EASYFARM
      <img src='./imgs/Berries.jpg' style={{width:'40px'}} alt="Avatar.logo" className='rounded-pill'></img>
      </Navbar.Brand>
</div>

      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto container-fluid my-2 my-lg-0"  navbarScroll >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Tour">Tour</Nav.Link>
          <Nav.Link href="/Market">Market</Nav.Link>
          <Nav.Link href="/Order">Order</Nav.Link>
          <Nav.Link href="/Vetinary">Vetinary</Nav.Link>
          <Nav.Link href="/Contact">ContactUs</Nav.Link>
          <Nav.Link href="/Signup">SignUp</Nav.Link>
          <Nav.Link href="/Login">Login</Nav.Link>
        
          <NavDropdown title="About" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/About">About Us</NavDropdown.Item>
          <NavDropdown.Item href="/About">Our Services</NavDropdown.Item> 
          <NavDropdown.Item href="/About"> Our History </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Mission</NavDropdown.Item>
            <NavDropdown.Item href="#">Vission</NavDropdown.Item>
          </NavDropdown>
          </Nav>

        <Form className="d-flex">      
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="light">Search</Button>
   
        </Form>
      </Navbar.Collapse>
    </Container>
 </Navbar>
);
}
 export default Navbars
//
//<nav  className='navbar'>
//
//    <h1>< a href='/'>EasyFarm</a></h1>
//
//
//    <div className='links'>
//    <Link to='/'>Home</Link>
//    <Link to='/Shop'>Shop </Link>
//    <Link to ='/Market'> Market</Link>
//    <Link to ='/Signup'>Signup </Link>
//    <Link to ='/Login'>Login</Link> 
//    <Link to='/About' >About</Link>
//    </div>    
//  </nav> 
//  )
//}

