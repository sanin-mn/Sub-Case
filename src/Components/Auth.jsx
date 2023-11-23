import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { registerApi } from '../services/allApis'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({ register }) {
  const registerForm = register ? true : false
  const [userData, setUserData] = useState({
    username: "", email: "", password: ""
  })
  const navigate = useNavigate()

  // console.log(userData);
  const handleRegister = async (e)=>{
    e.preventDefault()
    const {username,email,password} = userData
    if(!username || !email || !password){
      toast.info("Please fill the form comlpletly")
    }else{
      // api call
      const res = await registerApi(userData)
      console.log(res);
      if(res.status===200){
        toast.success(`${res.data.username} has successfully registered...`)
        // reset state
        setUserData({
          username: "", email: "", password: ""
        })
        navigate('/login')
      }else{
        toast.warning(res.response.data)
      }
    }
  }
  return (
    <div className='bg-dark' style={{ paddingTop: '150px', height:'90vh' }}>

      <div className='w-100 d-flex justify-content-center'>
        <div className="text-white p-4 mb-5" style={{ backgroundColor: 'black', height: 'max-content', width: 'max-content' }}>
          <h5 className='fw-normal mt-3 pb-3 text-light'>
            {
              registerForm ? 'sign up to your account' : 'sign in to your account'
            }
          </h5>
          <Form >
            {registerForm && <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Control type="text" placeholder="Enter Your Name" value={userData.username} onChange={e => setUserData({ ...userData, username: e.target.value })} />
            </Form.Group>}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Your E-mail" value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Enter Your Password" value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} />
            </Form.Group>

            {
              registerForm ?
                <div>
                  <Button onClick={handleRegister} variant='warning' type='submit' size='md'>Register</Button>
                  <p className='mt-3'>Already have an account ? <Link to={'/login'}>Login Here</Link></p>
                </div> :
                <div>
                  <Button variant='warning' type='submit' size='md'>Login</Button>
                  <p className='mt-3'>If you are New user ? <Link to={'/register'}>Register Here</Link></p>
                </div>
            }
          </Form>
        </div>
      </div>
      <ToastContainer position='top-center'
      autoClose={2000} theme='colored' />
    </div>
  )
}

export default Auth