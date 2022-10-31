import React from 'react'
import {Button} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
//import {  UseSignup } from '../hooks/useSignUp'

const Signup = () => {

  const [FirstName,setFirstName] = useState('');
    const [LastName,setLastName] = useState('');
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const[error,setError]=useState(null);

   // const {signup,isLoading,error} = UseSignup();

    const handleSubmit = async(e)=>{
      e.preventDefault();
      
  //    await signup(FirstName,LastName,Email,Password)

  const user={FirstName, LastName, Email, Password}; 
  const response = await  fetch('/api/signups',
  {
      method:'POST',
      headers:{"content-Type":"application/json"},
      body: JSON.stringify(user)
  })
  const json= await response.json()

  if(!response.ok){

      setError(json.error)
  }

  if(response.ok){
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      //SetProductImage('')
      //SetProductPrice('')
      //setError(null)
      console.log('YOU ADED NEW PRODUCT')
  
  
} 

    }

    return (
<Container>

  <h2 className=' h2  bg-success'>SIGNUP</h2>
  <form onSubmit={handleSubmit}>
        <Form onSubmit={handleSubmit}>

        <Form.Group className= "mb-3"  controlId="form.Name">
           <Form.Label className='fw-bold' column="lg" >FirstName:</Form.Label>
          <Form.Control type='text'required placeholder='Enter FirstName' name='FirstName' value={FirstName} onChange={(e)=>setFirstName(e.target.value)} />
        </Form.Group>
        
        <Form.Group className= "mb-3"  controlId="form.Name">
           <Form.Label className='fw-bold' column="lg" >LastName:</Form.Label>
          <Form.Control type='text'placeholder='Enter LastName' name='lastName' value={LastName}onChange={(e)=>setLastName(e.target.value)} required/>
        </Form.Group>
        

       <Form.Group className= "mb-3" controlId="form.Email">
         < Form.Label className='fw-bold' column="lg" >EMAIL:</Form.Label>
         <Form.Control type='email' aria-label="Large" placeholder='name@example.com' name='Email' value={Email} onChange={(e)=>setEmail(e.target.value)} required/>
        </Form.Group>

        <Form.Group className= "mb-3" controlId='form.Password'>
        <Form.Label className='fw-bold' column="lg">Password:</Form.Label>
         <Form.Control type='Password'  required placeholder='Enter-Password' name='password'  value={Password} onChange={(e)=>setPassword(e.target.value)} />
         </Form.Group> 

        </Form>
        </form>
<div className='container-fluid col-2'>
      <Button variant='outline-dark bg-success my-4'  size="lg">SUBMIT</Button>  
      {error && {error}}
    
    <p>Already have an account? <a href='/login'>Sign In?</a></p>
  </div>
</Container>
    )
}

export default Signup