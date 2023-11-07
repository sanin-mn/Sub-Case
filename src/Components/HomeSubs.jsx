import React from 'react'
import Marquee from 'react-fast-marquee'
import SubCards from './SubCards'
import { Col, Row } from 'react-bootstrap'



function HomeSubs() {
  return (
    <div>  
      <Marquee>
        <Row className='mt-5'>
              <Col className='py-2 p-3 px-5'>
                  <SubCards/>
              </Col>
              <Col className='py-2 p-3 px-5'>
                  <SubCards/>
              </Col>
              <Col className='py-2 p-3 px-5'>
                  <SubCards/>
              </Col>
              <Col className='py-2 p-3 px-5'>
                  <SubCards/>
              </Col>
              <Col className='py-2 p-3 px-5'>
                  <SubCards/>
              </Col>
          </Row>
      </Marquee>
    </div>
  )
}

export default HomeSubs
