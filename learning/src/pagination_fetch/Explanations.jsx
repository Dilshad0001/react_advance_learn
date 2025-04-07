import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Explanations() {
    const [content,setContent]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>setContent(res.data))
    },[id])
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.body}</p>
    </div>
  )
}

export default Explanations
