import React from 'react'
import instance from '../instance'
import { useEffect } from 'react'
import { useState } from 'react'
import './row.css'

function Row({title,fetchUrl}) {
    const base_url = "https://image.tmdb.org/t/p/original";
    const [allmovies,setmovie]=useState([])
    const fetchData= async()=>{
        const response=await instance.get(fetchUrl)
        // console.log(response)
        const {data}=response
        // console.log(data)
        setmovie(data.results)
        
    }
   useEffect(()=>{
        fetchData()
    },[]); 
   console.log(allmovies)
    // console.log(title,fetchUrl)
   
  return (
    <>
    <div className='row'>
    <h1 style={{color:'white' ,marginTop:"20px"}}>{title}</h1>
    <div className='movie_row'>
        {
            allmovies?.map((item)=>(
              <img src={`${base_url}${item.poster_path
              }`} alt="" className='movie' />
                
            ))
        }
    </div>
    </div>
   
    </>
  )
}

export default Row;