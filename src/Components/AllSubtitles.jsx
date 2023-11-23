import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import TableModal from './TableModal';


function AllSubtitles() {

    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Card onClick={() => setLgShow(true)} style={{ width: '13rem', border: '3px solid white', borderRadius: '0px' }}>
                <Card.Img variant="top-bottom" src={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ.jpg'} />
            </Card>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton className='bg-danger'>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <h4>Movie Name</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-danger'>
                    <h4>About</h4>
                    <TableModal />
                    <p><i className="fa-brands fa-imdb fa-2xl me-3"></i>{''}<i className="fa-solid fa-star fa-lg text-warning"></i>63/40</p>
                    <p className='text-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, cupiditate ullam doloribus deserunt placeat, omnis et non, perferendis iure neque impedit! Voluptates ex officia fuga id dicta obcaecati, optio magni!</p>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center bg-danger'>
                    <Button className='fw-bold' variant="warning">Download {' '}<i class="fa-solid fa-file-arrow-down fa-bounce"></i></Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AllSubtitles