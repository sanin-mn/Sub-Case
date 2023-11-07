import React from 'react'
import HomeSubs from '../Components/HomeSubs'



function Home() {
  return (
    <div className='bg-dark vh-100 w-100' style={{paddingTop:'100px'}}>
      <h5 className='text-center text-info'>New Releases</h5>
      <HomeSubs />
    </div>
  )
}

export default Home