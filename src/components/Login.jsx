
import { useState } from 'react'
import React from 'react'
import {Button} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


const Login = () => {

    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');

    const handleSubmit = async(e)=>{
      e.preventDefault();
      console.log(Email,Password)

    }

    return (
<Container>
  <h2 className=' h2  bg-success'>LOGIN</h2>
        <Form action='/login' method='post' onSubmit={handleSubmit}>

       <Form.Group className= "mb-3" controlId="form.Email">
         < Form.Label className='fw-bold' column="lg" >EMAIL:</Form.Label>
         <Form.Control type='email' aria-label="Large" placeholder='name@example.com' name='Email' value={Email} onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className= "mb-3" controlId='form.Password'>
        <Form.Label className='fw-bold' column="lg">Password:</Form.Label>
         <Form.Control type='Password'  placeholder='Enter-Password' name='password'  value={Password} onChange={(e)=>setPassword(e.target.value)} />
         </Form.Group> 

        </Form>
<div className='container-fluid col-2'>
      <Button variant='outline-dark bg-success my-4'  size="lg" onClick={handleSubmit}>SUBMIT</Button>    
    <p>Dont have an account? </p> 
    <p>Create one by SIGNING UP?</p> <a href='/signup'>Sign UP?</a>
  </div>
</Container>
    )
}

export default Login




/*
return (
    
  <div className=' p-2 mb-3'>
      
      <form>
      <h2 className='h2 '>LOGIN</h2>
      <label>Username/email:</label>
      <input className='input' type='text' required></input>
      <label>Password:</label>
      <input className='input' type='Password'></input>
      <button className='container-fluid button '>SUBMIT</button>
      <p>Don't have an account? </p>
      <p>Create Account. <a href='/SignUp'>SignUp?</a></p>
      </form>    
  </div>
 
)
*/