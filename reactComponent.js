import React from "react"
import {useState} from 'react';

const Home = () =>{
      const [blog, setBlog] = useState(
        [
         {title:"my site",body:"what ever this is", author:"paul", id:1},
         {title:"my food",body:"what ever this is", author:"tom", id:2},
         {title:"my pet",body:"what ever this is", author:"gary", id:3}
        ]
      )

    return (
        <div>
         {blog.map((blog) => (
            <div  key={blog.id}>  
            <h2>{blog.title}</h2>  
            <p>writen by {blog.author}</p>
            </div>            
         ))}
        </div>

    ); 

}  

export default Home