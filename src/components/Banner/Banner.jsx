import React from 'react'
import './Banner.css'
const bannerByCategory = {
  Programming: '/media/programming-blog-cover.jpg',
  Cooking: '/media/cooking-blog-cover.jpg',
  Workouts: '/media/Workouts-blog-cover.jpg',
  Travelling: '/media/travelling-blog-cover.jpg',
  Health: '/media/Health.jpg',
}
function Banner({category}){
  const bannerImage = bannerByCategory[category]||'/media/Banner.jpg';
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
