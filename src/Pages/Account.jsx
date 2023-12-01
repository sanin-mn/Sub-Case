import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link, useNavigate} from 'react-router-dom';
import { useEffect } from 'react'
import { useState } from 'react'

function Account() {
  const navigate = useNavigate()
  const [userName,setUserName] = useState("")
  const [isLoggedIn,setLoggedIn] = useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
        setLoggedIn(true)
    }else{
        setLoggedIn(false)
    }
},[])

    useEffect(()=>{
        if(localStorage.getItem("existingUser")){
            setUserName(JSON.parse(localStorage.getItem("existingUser")).username)
        }
    },[])

    const handleLogout = () =>{
      sessionStorage.removeItem("token")
      localStorage.removeItem("existingUser")
      localStorage.removeItem("Role")
      setLoggedIn(false)
      navigate('/')
    }
  return (
    <div>
    <div className='text-center vh-100 bg-dark d-flex align-items-center justify-content-center' style={{paddingTop:'100px'}}>
      
    { isLoggedIn ? <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='bg-secondary' src={'https://tse4.mm.bing.net/th?id=OIP.0kihUCrrAFEjy-Mj2YnekQAAAA&pid=Api&P=0&h=180'} />
      <Card.Body className='bg-dark'>
        <Card.Title className='text-white'>Admin Panel</Card.Title>
        <Card.Text className='text-white'>Wecome {userName}</Card.Text>
        <div>
          <Link to={'/admin'}><button className='btn btn-outline-warning me-1'>Add Movies</button></Link>
          <Link to={'/adminmovies'}><button className='btn btn-outline-warning ms-1'>View Movies</button></Link>
        </div>
        <button onClick={handleLogout} className='btn btn-danger mt-3'>Logout</button>
      </Card.Body>
    </Card>
    :
    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" className='bg-secondary' src={'https://logodix.com/logo/1707081.png'} />
    <Card.Body className='bg-dark'>
      <Card.Title className='text-white'>Admin Login</Card.Title>
      <Link to={'/login'}><button className='btn btn-outline-warning'>Login</button></Link>
    </Card.Body>
  </Card>
    }
    </div>
    </div>
  )
}

export default Account