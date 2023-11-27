import React, { useState } from 'react'
import HomeSubs from '../Components/HomeSubs'
import AboutAccord from '../Components/AboutAccord'
import HomeDescription from '../Components/HomeDescription'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { homeMovieAPI } from '../services/allApis'





function Home() {
  const [allMovies,setAllMovies] = useState([])

  const getHomeMovies = async ()=>{
    const result = await homeMovieAPI()
    if(result.status===200){
      setAllMovies(result.data)
    }else{
      alert(result.response.data)
    }
  }

  useEffect(()=>{
    getHomeMovies()
  },[])

  return (
    <div className='bg-dark w-100' style={{ paddingTop: '100px', overflowX: 'hidden' }}>
      <h5 className='text-center text-white'>New Releases</h5>

      <HomeSubs allMovies={allMovies}/>

      <div className="text-center mt-5">
        

        <Link to={'/subtitles'} style={{textDecoration:'none'}}><Button variant="outline-warning" className='fw-bold ' style={{width:'20rem'}}>
         All Subtitle{''}{' '}<i className="fa-solid fa-chevron-right fa-beat-fade"></i>
        </Button></Link>:

      </div>

      <section style={{ marginTop: '7rem' }} >
        <HomeDescription />
      </section>

      <section style={{ marginTop: '5rem', marginBottom: '8rem' }}>
        <AboutAccord />
      </section>

      <section className='container text-center mb-5'>
        <p className='text-secondary'>coming soon</p>
        <img className='img-banner' style={{width:'100%'}} src={'https://images.fanpop.com/images/image_uploads/movies-banner-movies-673219_800_140.jpg'} alt="" />
      </section>
    </div>
  )
}

export default Home