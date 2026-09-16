import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import TrendingBlog from '../../components/TrendingBlog/TrendingBlog';
import blogs from '../../Utils/MockData';
import { Link } from 'react-router-dom';
import './Home.css'
function Home () {
  return (
    <>
      <Banner/>
       <div className="my-2">
        <h1>Read blogs from</h1>
        <div className="d-flex justify-content-between">
            <Link className="home-link" to={'/blogs/Programming'}>
                 <div className="card" style={{width: '18rem'}}>
                 <img src="/media/programming.jpg" className="card-img-top" alt="..."/>
                 <div className="card-body">
                     <h5 className="card-title">Programming</h5>
                 </div>
                 </div>
            </Link>
            <Link className="home-link" to={'/blogs/Cooking'} >
                  <div className="card" style={{width: '18rem'}}>
                 <img src="/media/cooking.jpg" className="card-img-top" alt="..."/>
                 <div className="card-body">
                     <h5 className="card-title">Cooking</h5>
                 </div>
             </div>
            </Link>
            <Link className="home-link" to={'/blogs/Workouts'} >
               <div className="card" style={{width: '18rem'}}>
                 <img src="/media/Fitness.jpg" className="card-img-top" alt="..."/>
                 <div className="card-body">
                     <h5 className="card-title">WorkOuts</h5>
                 </div>
             </div>
            </Link>
        </div>
       </div>
       <h1>Trending Blogs</h1>
       <div className='trending-blogs-section d-flex justify-content-between flex-wrap row-gap-2'>
            {
                blogs.map(blog=>
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

export default Home;
