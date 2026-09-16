import React from 'react'
import './Banner.css'
const bannerByCategory = {
  Programming: `${import.meta.env.BASE_URL}media/programming-blog-cover.jpg`,
  Cooking: `${import.meta.env.BASE_URL}media/cooking-blog-cover.jpg`,
  Workouts: `${import.meta.env.BASE_URL}media/Workouts-blog-cover.jpg`,
  Travelling: `${import.meta.env.BASE_URL}media/travelling-blog-cover.jpg`,
  Health: `${import.meta.env.BASE_URL}media/Health.jpg`,
}
function Banner({category}){
  const bannerImage = bannerByCategory[category]||`${import.meta.env.BASE_URL}media/Banner.jpg`;
  const bannerTitle = category?`${category} blogs`:'Welcome to Our Blogs Website';
  return (
    <>
      <div className='banner-div'>
            <div className='overlay'>
                <h1 id='banner-title'>{bannerTitle}</h1>
            </div>     
            <img src={bannerImage} alt={`${category || 'Blogs'} banner`} width={'100%'} height={'650px'} style={{objectFit:'cover'}} />
      </div>
    </>
  )
}

export default Banner
