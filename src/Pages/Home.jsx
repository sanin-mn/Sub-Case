import React, { useState } from 'react'
import HomeSubs from '../Components/HomeSubs'
import AboutAccord from '../Components/AboutAccord'
import HomeDescription from '../Components/HomeDescription'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'




function Home() {
  const [isLoggedIn,setLoggedIn] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem("existingUser")){
      setLoggedIn(true)
    }else{
      setLoggedIn(false)
    }
  },[])

  return (
    <div className='bg-dark w-100' style={{ paddingTop: '100px', overflowX: 'hidden' }}>
      <h5 className='text-center text-white'>New Releases</h5>

      <HomeSubs />

      <div className="text-center mt-5">
        
      { isLoggedIn?
        <Link to={'/subtitles'} style={{textDecoration:'none'}}><Button variant="outline-warning" className='fw-bold d-inline ' style={{width:'20rem'}}>
         All Subtitle{''}{' '}<i className="fa-solid fa-chevron-right fa-beat-fade d-inline"></i>
        </Button></Link>:
        <Link to={'/login'} style={{textDecoration:'none'}}><Button variant="outline-warning" className='fw-bold d-inline ' style={{width:'20rem'}}>
        Getting Started{''}{' '}<i className="fa-solid fa-chevron-right fa-beat-fade d-inline"></i>
       </Button></Link>
        }
      </div>

      <section style={{ marginTop: '4rem' }} >
        <HomeDescription />
      </section>

      <section style={{ marginTop: '5rem', marginBottom: '10rem' }}>
        <AboutAccord />
      </section>
    </div>
  )
}

export default Home