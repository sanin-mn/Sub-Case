import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function AboutAccord() {
    return (
        <div className='d-flex justify-content-center'>
            <Accordion  flush className='w-75 mt-5 text-white'>
                <Accordion.Item eventKey="0" className='text-white' style={{backgroundColor:'#242424'}}>
                    <Accordion.Header><h5 className='text-white fw-light'>What is Subcase ?</h5></Accordion.Header>
                    <Accordion.Body>
                   <h5 className='text-white fw-light'> Subcase has an extensive library of subtitles for feature films, documentaries, anime and more. Downlod as much as you want, anytime you want</h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='bg-dark text-white'>
                    <Accordion.Header><h5 className='text-white fw-light'>How much does Subcase cost ?</h5></Accordion.Header>
                    <Accordion.Body>
                        <h5 className='text-white fw-light'>This is non profitable organization , all products are completely free of cost</h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='bg-dark text-white'>
                    <Accordion.Header><h5 className='text-white fw-light'>Which language subtitles ?</h5></Accordion.Header>
                    <Accordion.Body>
                    <h5 className='text-white fw-light'>We provided English and Malayalam Subtitles</h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='bg-dark text-white'>
                    <Accordion.Header><h5 className='text-white fw-light'>How to connect & contribute ?</h5></Accordion.Header>
                    <Accordion.Body>
                    <h5 className='text-white fw-light'>Connect with through contact information ,If you want to contribute <a href="/contribute"> contribute</a> </h5>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default AboutAccord