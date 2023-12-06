import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function Spin() {
  return (
    <div className='d-flex align-items-center justify-content-center' style={{height:'80vh'}}>
        <Spinner  animation="grow" role="status" variant='warning'>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default Spin