import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { BASEURL } from '../services/baseUrl';



function AllSubtitles({ movies,index}) {

    const [lgShow, setLgShow] = useState(false);

    return (
        < >
            <div >
                <Card className='img-hover' onClick={() => setLgShow(true)} style={{ width: '10rem', border: '3px solid white', borderRadius: '0px' }}>
                    <Card.Img className='img-hover' variant="top-bottom" src={movies?.movieImage ? `${BASEURL}/uploads/${movies.movieImage}` : null} />
                </Card>
                <p className='text-white'>{movies.moviename}</p>
            </div>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                class="modal-dialog modal-fullscreen"
                style={{ backgroundColor: 'black' }}

            >
                <Modal.Header closeButton className='bg-warning'>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <h6> {movies.moviename} / Sub Case / Realease : {index+1}</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <h4>About</h4>

                    <Row>
                        <Col className='text-center' md={4}><img src={movies?.movieImage ? `${BASEURL}/uploads/${movies.movieImage}` : null} style={{ width: '10rem' }} alt="" /></Col>

                        {/* table */}

                        <Col md={8}>
                            <table style={{ width: "100%" }} border={1} width={500}>
                        
                                <tr>
                                    <td><h6 className='ms-3  text-white'>Movie</h6></td>
                                    <td><h6 className='text-white'>{movies.moviename}</h6></td>

                                </tr>
                                <tr>
                                    <td><h6 className='ms-3 text-white'>Language</h6></td>
                                    <td><h6 className='text-white'>{movies.language}</h6></td>

                                </tr>
                                <tr>
                                    <td><h6 className='ms-3  text-white'>Director</h6></td>
                                    <td><h6 className='text-white'>{movies.director}</h6></td>

                                </tr>
                                <tr>
                                    <td><h6 className='ms-3  text-white'>Transalator</h6></td>
                                    <td><h6 className='text-white '>{movies.transalator}</h6></td>
                                </tr>
                                <tr>
                                    <td><h6 className='ms-3  text-white'>Genre</h6></td>
                                    <td><h6 className='text-white '>{movies.genre}</h6></td>
                                </tr>
                            </table>
                        </Col>
                    </Row>


                    <div className='mt-5'>
                        <p><i className="fa-brands fa-imdb fa-2xl me-2 text-warning"></i>{''}<i className="fa-solid fa-star text-warning me-1"></i>{' '}<span className='text-white'>{movies.imdb}</span></p>
                    </div>
                    <p className='text-light'>{movies.info}</p>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center bg-dark'>
                    <a className='btn btn-warning fw-bold' Button download href={`${BASEURL}/uploads/${movies.subfile}`} >Download {' '}<i class="fa-solid fa-file-arrow-down fa-bounce"></i></a>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AllSubtitles