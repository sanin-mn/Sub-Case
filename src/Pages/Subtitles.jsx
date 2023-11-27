import React from 'react'
import AllSubtitles from '../Components/AllSubtitles'
import { Form } from "react-bootstrap";
import { useState } from 'react';
import { useEffect } from 'react';
import { allMovieAPI } from '../services/allApis';

function Subtitles() {
  const [allMovies, setAllMovies] = useState([])

  const getAllMovies = async () => {
    const result = await allMovieAPI()
    if (result.status === 200) {
      setAllMovies(result.data)
    } else {
      alert(result.response.data)
    }
  }

  useEffect(()=>{
    getAllMovies()
  },[])

  return (
    <div className='bg-dark' style={{ paddingTop: '80px',minHeight:'80vh'}}>
      {/* search bar */}
        <Form style={{width:'20rem',zIndex:'1050',height:'20rem'}} className='mt-4 position-fixed top-0 start-50 translate-middle-x'>
          <Form.Control
            placeholder="Search Movies"
            className="me-2 rounded-pill"
            aria-label="Search"
            type="search"
          />
        </Form>

      <p className='text-center text-white '>All Movies</p>

      {/* cards */}
      <div class="container text-center">
        <div className='row mt-3 gy-3 gap-auto'>
          {allMovies?.length > 0 ? allMovies.map(movies => (
            <div className='col-lg-3 col-md-6 col-sm-12 mx-auto d-flex justify-content-center'>
              <AllSubtitles movies={movies} />
            </div>
          )) : <p className='text-center text-danger fs-4'>No movie found</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Subtitles