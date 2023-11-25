import React from 'react'
import AllSubtitles from '../Components/AllSubtitles'
import Header from '../Components/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import { allMovieAPI } from '../services/allApis';

function Subtitles() {
  const [allMovies, setAllMovies] = useState([])

  const getAllMovies = async (token) => {
    const reqHeader = {
      "Content-Type": "application/json", "Authorization": `Bearer ${token}`
    }
    const result = await allMovieAPI(reqHeader)
    if(result.status===200){
      setAllMovies(result.data)
    }else{
      alert(result.response.data)
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      getAllMovies(token)
    }else{
      alert("Please Login")
    }
  }, [])

  return (
    <div className='bg-dark' style={{ paddingTop: '100px' }}>
      <p className='text-center text-white'>All Movies</p>
      {/* search bar */}
      <Header insideSubtitles={true} />
    
      {/* cards */}
      <div class="container text-center">
        <div className='row mt-3 gy-3 gap-auto'>
          { allMovies?.length>0?allMovies.map(movies=>(
            
            <div className='col-lg-3 col-md-6 col-sm-12 mx-auto d-flex justify-content-center'>
            <AllSubtitles movies={movies}/>
          </div>
          )) : <p className='text-center text-danger'>No movie found</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Subtitles