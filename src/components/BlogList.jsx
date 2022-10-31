// in this component i will showcase the use of props in react.
//pass data from one component to another using prop(Nest a component insie another).
//passing data from parent to child.
//deleteList is a function passed as a prop to this component to delete the set of list it fun to set the setblog method in Blog.js component

import React from 'react'

const BlogList = ({blog,title})=> {
  
      return (
    <div className='blog-list'>
        <h2 style={{color:'purple'}}>{title}</h2>
        {blog.map ((blog)=>(
            <div className="blog-preview">
              
                <h2>{blog.Product}</h2>
                <p>{blog.ProductDesc}</p>
                <p>{blog.ProductCateg}</p>
            </div> 
        ))}

    </div>
  )
}

export default BlogList
