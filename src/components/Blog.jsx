
// in this component i will try to output a list of an array. 
//map() will cycle over the list and can do anything we need. 

//also there is passing of data from this componentt to component BlogList by setting prop line 24.
//line 25 we use filter method  

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import BlogList from './BlogList';

const Blog = () => {

    const [blog,setBlog] = useState (null);


  /*  const deleteList = (id) =>{
      const deletes = blog.filter( blog => blog.id !==id);
      setBlog(deletes)
    } */

    useEffect(()=>{
      fetch(' http://localhost:8000/blog')
      .then(res =>{                             //.then method to get response objet using json.
      return res.json();
      })
      .then(data=>{                           //then method to get the data.   
        setBlog(data)          
      });
    },[])


  return (
    <div >     
   { blog  && <BlogList blog={blog}  title='EasyFarm Benefits.' /> }
        </div>    

        //{blog.map ((blogs)=>(     //map () function
          //  <div className="blog-preview" key={blog.id}>  
            // <h2>{blogs.title}</h2>
           //  <p>{blogs.body}</p>
         //  </div> 
       // ))}
   
  )
}

export default Blog