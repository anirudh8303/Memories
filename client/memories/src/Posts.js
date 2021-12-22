import React, { useState, useEffect } from 'react'
import "./Posts.css"
import Post from './Post'
import axios from  "axios";

function Posts() {
    const[memorie, setMemorie] = useState([]);
   useEffect(() => {
      axios.get('/posts').then((res)=>{
          setMemorie(res.data.posts);
      })
   }, [])
    return (
        <div>
        <h3 style={{textAlign:"center", fontSize:"26px", fontFamily:"cursive", marginBottom:"30px"}}>Your Memories💙</h3>
        <div className="posts">
        {
           memorie.map((ele) => 
                <Post creator={ele.creator} time={ele.createdAt} title={ele.title} location={ele.location} msg={ele.message} image={ele.selectedFile}/>
                )
        }
        </div>
        </div>
    )
}

export default Posts
