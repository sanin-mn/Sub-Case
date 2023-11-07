import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header_logo from '../Assets/SC_Logo.png'

function Header() {
  return (
    <Navbar expand="lg" style={{backgroundColor:'#991f00'}}>
      <Container >
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={Header_logo}
              width="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-end flex-grow-1">
            <Nav.Link href="#action1" className='fw-bold text-warning'>HOME</Nav.Link>
            <Nav.Link href="#action2" className='fw-bold text-warning'>ABOUT</Nav.Link>
            <Nav.Link href="#action3" className='fw-bold text-warning'>SUBTITLES</Nav.Link>
            <Nav.Link href="#action4" className='fw-bold text-warning'>CONTRIBUTE</Nav.Link>
            <Nav.Link href="#action5" className='fw-bold text-warning'>CONTACT</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header