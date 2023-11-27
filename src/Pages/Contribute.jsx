import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contribute() {
  return (
    <div className='bg-dark vh-100' style={{ paddingTop: '100px' }}>

      <h4 className='text-white mt-3 text-center'>To Contribute</h4>
      <p className='text-secondary fs-5 p-3 text-center'>Send your valuable contribution , we'll responsible for your work and give feedback immedietly</p>

      <div className='w-100 d-flex justify-content-center'>
        <div className='text-white p-4 mb-5' style={{ backgroundColor: 'black', height: 'max-content', width: 'max-content' }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Movie Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="file" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>More about</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>

    </div>
  )
}

export default Contribute