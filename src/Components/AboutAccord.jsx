import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function AboutAccord() {
    return (
        <div className='d-flex justify-content-center'>
            <Accordion alwaysOpen flush className='w-75 mt-5 text-white'>
                <Accordion.Item eventKey="0" className='text-white' style={{backgroundColor:'#242424'}}>
                    <Accordion.Header><h5 className='text-white fw-light'>What is Subcase ?</h5></Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='bg-dark text-white'>
                    <Accordion.Header><h5 className='text-white fw-light'>What is Subcase ?</h5></Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='bg-dark text-white'>
                    <Accordion.Header><h5 className='text-white fw-light'>What is Subcase ?</h5></Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='bg-dark text-white'>
                    <Accordion.Header><h5 className='text-white fw-light'>What is Subcase ?</h5></Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default AboutAccord