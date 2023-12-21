import React from 'react'
import { useEffect } from 'react'
import instance from '../instance'
import { useState } from 'react'
import './banner.css'

function Banner({fetchUrl}) {
    const base_url = "https://image.tmdb.org/t/p/original";
    console.log(fetchUrl)
    const [banner,setbann]=useState([])
    const fetchData= async()=>{
    const response=await instance.get(fetchUrl)
    const {data}=response
    setbann(data.results[Math.floor(Math.random()*data.results.length)])
   }
   useEffect(()=>{
        fetchData()
    },[]);

   
  return (
   <>
   
   <div>
    <div style={{height:"600px",backgroundImage:`url(${base_url}${banner.backdrop_path})`,backgroundSize:"cover"}}>
        <div className='bannertxt' style={{background:"transparent"}}>
            <h1 style={{color:"white"}}>{banner?.name}</h1>
            <button className='btn btn-danger'>Play <i class="fa-solid fa-play bg-transparent"></i></button>
            <button  className='ms-3 bg-transparent more'    style={{border:"1px solid white",color:"white"}}>More Info <i class="fa-solid fa-caret-down bg-transparent"></i></button>
            <h5 style={{color:"white"}}>{banner?.overview?.slice(0,200)}...</h5>

        </div>


</div>
   </div>
   </>
  )
}

export default Banner