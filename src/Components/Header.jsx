import React, { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header_logo from '../Assets/SC_Logo.png'
import { Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';


function Header({ insideSubtitles }) {
  const [isLoggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem("existingUser")){
      setLoggedIn(true)
    }else{
      setLoggedIn(false)
    }
  },[])

  return (
    <Navbar expand="lg fixed-top" className='bg-warning'>
      <Container >
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Header_logo}
            width="100"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Nav>
          {
            insideSubtitles &&

            <Form inline className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 rounded-pill"
                aria-label="Search"
              />
              <Button className="rounded-pill" variant="outline-dark">
                Search
              </Button>
            </Form>

          }
        </Nav>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-end flex-grow-1">
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }} className='me-3'>HOME</Link>
            {isLoggedIn ?
              <Link to={'/subtitles'} style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }} className='me-3'>SUBTITLES</Link>
              :
              <Link to={'/login'} style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }} className='me-3'>SUBTITLES</Link>

            }
            <Link to={'/contribute'} style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }} className='me-3'>CONTRIBUTE</Link>

            <Link to={'/account'}><i className="fa-solid fa-circle-user fa-2xl text-dark"></i></Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header