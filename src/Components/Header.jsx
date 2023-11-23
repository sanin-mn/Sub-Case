import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header_logo from '../Assets/SC_Logo.png'
import { Button,Form} from "react-bootstrap";
import { Link } from 'react-router-dom';


function Header({insideSubtitles}) {
  const [isLoggedIn,setLoggedIn] = useState(true)

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
              insideSubtitles&&
  
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
            <Nav.Link href="/" className='fw-bold text-dark'>HOME</Nav.Link>
            { isLoggedIn?
              <Nav.Link href="/subtitles" className='fw-bold text-dark'>SUBTITLES</Nav.Link>
              :
              <Nav.Link href="/register" className='fw-bold text-dark'>SUBTITLES</Nav.Link>

            }
            <Nav.Link href="/contribute" className='fw-bold text-dark'>CONTRIBUTE</Nav.Link>
            <Link to={'/login'}><Button variant="outline-dark">Login</Button></Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header