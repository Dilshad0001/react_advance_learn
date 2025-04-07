import React from 'react'
import axios from 'axios'

function Axios_post_2() {
    const additem=()=>{
        axios.post("http://localhost:3001/posts",{
            title:"new post **"
        })
    }

    const updateitem=()=>{
        axios.put("http://localhost:3001/posts/4ca6",{
            id:"4ca6",
            title:"updated postsss"
        })}
    const deleteitem=()=>{
        axios.delete("http://localhost:3001/posts/4ca6")
    }   
  return (
    <div>
      <button onClick={additem}>add</button>
      <button onClick={updateitem}>update</button>
      <button onClick={deleteitem}>delete</button>
    </div>
  )
}

export default Axios_post_2
