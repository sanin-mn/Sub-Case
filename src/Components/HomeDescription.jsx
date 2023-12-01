import React from 'react'
import "aos/dist/aos.css";
import AOS from 'aos';


function HomeDescription() {

  
    AOS.refresh()
  

  return (
    <div className='d-flex justify-content-center align-items-center container' style={{height:'60vh',backgroundColor:'#101010',borderRadius:'1px 80px'}}>
        <div className='row'>
            <div  className='col-sm text-white d-flex justify-content-center align-items-center'>
            <h3 data-aos="fade-up-right" data-aos-duration="1000" className='ms-5'>“Cinema is a matter of what's in the frame and what's out” <h6 className='text-warning'>- Martin Scorsese</h6></h3>
            </div>
            <div className='col-sm'>
            <img data-aos="fade-down-left" data-aos-duration="1000" className='ms-5 w-50' src={'https://orig00.deviantart.net/027a/f/2013/107/b/1/film___animation_by_deiby_ybied-d622kdq.gif'} alt="" />
            </div>
        </div>
    </div>
  )
}

export default HomeDescription