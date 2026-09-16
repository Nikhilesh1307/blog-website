import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import TrendingBlog from '../../components/TrendingBlog/TrendingBlog';
import blogs from '../../Utils/MockData';
import './CategoryBlogs.css'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
function CategoryBlogs () {
    const [currentCategory,setCurrentCategory]=useState("Programming");
    const {category} = useParams();
    useEffect(()=>{
        if(category)
            setCurrentCategory(category);
    },[])
  return (
    <>
      <Banner category={category}/>
       <h1>{currentCategory}</h1>
       <div className='trending-blogs-section d-flex justify-content-between flex-wrap row-gap-2'>
            {
                blogs.map(blog=> blog.category == currentCategory &&
                  <TrendingBlog blog={blog}/>
                )
            }
       </div>
       <br/>
       <br/>
       <br/>

    </>
  )
}

export default CategoryBlogs;
