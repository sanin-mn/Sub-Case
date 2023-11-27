import React from 'react'
import Marquee from 'react-fast-marquee'
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap'
import { BASEURL } from '../services/baseUrl';
import Aos from 'aos';
import { useEffect } from 'react';




function HomeSubs({ allMovies }) {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div>
      <Marquee>
        <Row className='mt-4'>
          {allMovies?.length > 0 ? allMovies.map(movies => (
            <Col className='py-2 p-3 px-5'>
              <Card data-aos="zoom-out"  data-aos-duration="800" style={{ width: '16rem', border: '3px solid white', borderRadius: '0px' }}>
                <Card.Img  variant="top-bottom" src={movies?.movieImage?`${BASEURL}/uploads/${movies.movieImage}`:null} />
              </Card>
              {/* <p className='text-white text-center'>{movies.moviename}</p> */}
            </Col>
          )) :
            <p className='text-danger'>no releases</p>
          }
        </Row>
      </Marquee>
    </div>
  )
}

export default HomeSubs
