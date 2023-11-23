import React from 'react'
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Admin() {
    const [movieDetails,setMovieDetails] = useState({
        moviename:"",language:"",director:"",transalator:"",genre:"",imdb:"",info:"",image:"",subfile:"",userId:""
    })
    useEffect(()=>{
        if(localStorage.getItem("existingUser")){
            setMovieDetails({...movieDetails,userId:JSON.parse(localStorage.getItem("existingUser"))._id})
        }
    },[])
    console.log(movieDetails);
    return (
        <>
            <div className='bg-dark' style={{ paddingTop: '100px' }}>

                <h4 className='text-white mt-3 text-center'>Admin</h4>
                <div className='w-100 d-flex justify-content-center'>
                    <div className='text-white p-4 mb-5' style={{ backgroundColor: 'black', height: 'max-content', width: '500px' }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="file" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Movie Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Language" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Director" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Transalator" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Genre" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Imdb rating" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>More about</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="file" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Admin