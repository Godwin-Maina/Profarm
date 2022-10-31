
import React from 'react'
import { useState } from 'react'

import '../Homestyle.css'


const Market = () => {

//track the data stored in the form below and put into some states for use later.
//you must  also track record so as to be able to submit events and forms.
const [product ,SetProduct]=useState('');
const [productDescription ,SetProductDesc]=useState('');
const [productCategory ,SetProductCateg]=useState('');
//const [productImage ,SetProductImage]=useState('');
//const [productPrice ,SetProductPrice]=useState('');

const[error,setError]=useState(null);

//function to request a post to data the json file.
  const handlesubmit = async(e) =>{          
        e.preventDefault();  //prevent default refresh of form when on click.

        const products={product, productDescription, productCategory}; 
        const response = await  fetch('/api/products',
        {
            method:'POST',
            headers:{"content-Type":"application/json"},
            body: JSON.stringify(products)
        })
        const json= await response.json()

        if(!response.ok){

            setError(json.error)
        }

        if(response.ok){
            SetProduct('')
            SetProductCateg('')
            SetProductDesc('')
            //SetProductImage('')
            //SetProductPrice('')
            //setError(null)
            console.log('YOU ADED NEW PRODUCT')
        
        }
    } 

  return (

    <div>
        <p>CAPTURE A PICTURE OF WHAT YOU FARM..</p>

        <p>market is  where you post your products..</p>
        <p>what do you farm? do you got farm products you wanna post here to be seen then you are in the right platform</p>
        <p>post that farm produce you can get an order
        </p>
        <h2 className='bg-success h2 m-3'>Add your farm product</h2>

        <form onSubmit={handlesubmit}>
            <label >Product Name:</label>
            <input className='input' type='text'required 
            value={product}
            onChange={(e)=>SetProduct(e.target.value)}
            />

            <label>Product Description:</label>
            <textarea className='input'
                required 
                value={productDescription}
            onChange={(e)=>SetProductDesc(e.target.value)}
                >
            </textarea>
        
            <label className='input'>Product Category:
                <select className='input'
                          value={productCategory}
                          onChange={(e)=>SetProductCateg(e.target.value)}
                >
                    <option value='Crops'>Crop</option>
                    <option value='Machinery'>Machinery</option>
                    <option value='Livestock'>Livestock</option>

                </select>
            </label>   
          
            <button  className='col-5 button' >Add Product</button>
            {error && {error}}
        </form>   
    </div>
  )
}

export default Market


/*

  <label><legend>Product IMAGE:</legend></label>
            <input className='input' type='file'
            value={productImage}
            onChange={(e)=>SetProductImage(e.target.value)}
            />
        

            <label >Product Price:</label>
            <input className='input' type='text'required 
            value={productPrice}
            onChange={(e)=>SetProductPrice(e.target.value)}
            />


*/