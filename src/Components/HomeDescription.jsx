import React from 'react'
import { Col, Row } from 'react-bootstrap'

function HomeDescription() {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:'60vh',backgroundColor:'#101010',borderRadius:'1px 80px'}}>
        <Row>
            <Col className='text-white'>
            <h1 className='text-danger ms-4'>All Subtitle</h1>
            <h3 className='ms-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            </Col>
            <Col>
            <img className='ms-4' src="https://tse1.mm.bing.net/th?id=OIP.2liTCNFi9WNzptiudxJaPgHaD2&pid=Api&P=0&h=180" alt="" />
            </Col>
        </Row>
    </div>
  )
}

export default HomeDescription