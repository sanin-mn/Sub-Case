import React from 'react'
import AllSubtitles from '../Components/AllSubtitles'
import Header from '../Components/Header';

function Subtitles() {
  return (
    <div className='bg-dark' style={{ paddingTop: '100px' }}>
      <p className='text-center text-white'>All Movies</p>
      {/* search bar */}
    <Header insideSubtitles={true}/>
    
    {/* cards */}
      <div class="container text-center">
        <div className='row mt-3 gy-3 gap-auto'>
          <div className='col-lg-3 col-md-6 col-sm-12 mx-auto d-flex justify-content-center'>
            <AllSubtitles />
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 mx-auto d-flex justify-content-center'>
            <AllSubtitles />
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 mx-auto d-flex justify-content-center'>
            <AllSubtitles />
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 mx-auto d-flex justify-content-center'>
            <AllSubtitles />
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 mx-auto d-flex justify-content-center'>
            <AllSubtitles />
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 mx-auto d-flex justify-content-center'>
            <AllSubtitles />
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 mx-auto d-flex justify-content-center'>
            <AllSubtitles />
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 mx-auto d-flex justify-content-center'>
            <AllSubtitles />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subtitles