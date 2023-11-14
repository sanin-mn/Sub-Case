import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth({ register }) {
  const registerForm = register ? true : false


  return (
    <div className='bg-dark' style={{paddingTop:'150px'}}>

        <div className='w-100 d-flex justify-content-center'>
                <div className="text-white p-4 mb-5" style={{ backgroundColor: 'black', height: 'max-content', width: 'max-content' }}>
                  <h5 className='fw-normal mt-3 pb-3 text-light'>
                    {
                      registerForm ? 'sign up to your account' : 'sign in to your account'
                    }
                  </h5>
                  <Form >
                    {registerForm && <Form.Group className="mb-3" controlId="formBasicUsername">
                      <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>}

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter Your E-mail" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Enter Your Password" />
                    </Form.Group>

                    {
                      registerForm ?
                        <div>
                          <Button variant='light' type='submit' size='md'>Register</Button>
                          <p className='mt-3'>Already have an account ? <Link to={'/login'}>Login Here</Link></p>
                        </div> :
                        <div>
                          <Button variant='light' type='submit' size='md'>Login</Button>
                          <p className='mt-3'>If you are New user ? <Link to={'/register'}>Register Here</Link></p>
                        </div>
                    }
                  </Form>
                </div>
        </div>
    </div>
  )
}

export default Auth