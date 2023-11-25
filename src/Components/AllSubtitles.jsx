import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { BASEURL } from '../services/baseUrl';



function AllSubtitles({ movies }) {

    const [lgShow, setLgShow] = useState(false);

    return (
        < >
            <div >
                <Card onClick={() => setLgShow(true)} style={{ width: '13rem', border: '3px solid white', borderRadius: '0px' }}>
                    <Card.Img variant="top-bottom" src={movies?.movieImage?`${BASEURL}/uploads/${movies.movieImage}`:null} />
                </Card>
                <p className='text-white'>{movies.moviename}</p>
            </div>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                class="modal-dialog modal-fullscreen"
                style={{backgroundColor:'black'}}

            >
                <Modal.Header closeButton className='bg-warning'>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <h6> {movies.moviename} / Sub Case / Realease : {movies.index}</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <h4>About</h4>

<Row>
                            <Col className='text-center' md={4}><img src={movies?.movieImage?`${BASEURL}/uploads/${movies.movieImage}`:null} style={{width:'10rem'}} alt="" /></Col>
        
                            {/* table */}
        
                           <Col md={8}>
                                <table style={{ width: "100%" }} border={1} width={500}>
                                <tr>
                                    <td><h5 className='ms-3 font-monospace text-white'>Movie</h5></td>
                                     <td><h6 className='text-white'>{movies.moviename}</h6></td>
            
                                    </tr>
                                    <tr>
                                    <td><h5 className='ms-3 font-monospace text-white'>Language</h5></td>
                                     <td><h6 className='text-white'>{movies.language}</h6></td>
            
                                    </tr>
                                    <tr>
                                        <td><h5 className='ms-3 font-monospace text-white'>Director</h5></td>
                                        <td><h6 className='text-white'>{movies.director}</h6></td>
            
                                    </tr>
                                    <tr>
                                        <td><h5 className='ms-3 font-monospace text-white'>Transalator</h5></td>
                                        <td><h6 className='text-white '>{movies.transalator}</h6></td>
                                    </tr>
                                    <tr>
                                        <td><h5 className='ms-3 font-monospace text-white'>Genre</h5></td>
                                        <td><h6 className='text-white '>{movies.genre}</h6></td>
                                    </tr>
                                </table>
                           </Col>
</Row>


                    <div className='mt-5'>
                        <p><i className="fa-brands fa-imdb fa-2xl me-3 text-warning"></i>{''}<i className="fa-solid fa-star fa-lg text-warning"></i><span className='text-white'>{movies.imdb}</span></p>
                        </div>
                    <p className='text-light'>{movies.info}</p>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center bg-dark'>
                    <Button className='fw-bold' variant="warning">Download {' '}<i class="fa-solid fa-file-arrow-down fa-bounce"></i></Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AllSubtitles