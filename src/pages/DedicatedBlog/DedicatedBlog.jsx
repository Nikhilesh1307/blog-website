import React from 'react'
import './DedicatedBlog.css'
import Banner from '../../components/Banner/Banner'
import { useState,useEffect} from 'react'
import blogs from '../../Utils/MockData'
import { useParams } from 'react-router-dom'
function DedicatedBlog() {
    const [blogId,setId]=useState(1);
    let blogToDisplay = blogs.filter(blog=>blog.id==blogId)[0]
    const {id} = useParams();
    useEffect(()=>{
        if(id){
            setId(id);
        }

    },[])
    return (
    <>
      <Banner category={blogToDisplay?.category}/>
      <h1>{blogToDisplay.title}</h1>
      <h6>{blogToDisplay.category}</h6>
      <p>{blogToDisplay.content}</p>
    </>
  )
}
export default DedicatedBlog