import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header_logo from '../Assets/SC_Logo.png'
import { Link } from 'react-router-dom';


function Header() {


  return (
    <Navbar expand="lg fixed-top" className='bg-warning'>
      <Container >
        <Navbar.Brand >
          <Link to={'/'}>
            <img
              alt=""
              src={Header_logo}
              width="100"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-end flex-grow-1">
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }} className='me-3'>HOME</Link>
            
              <Link to={'/subtitles'} style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }} className='me-3'>SUBTITLES</Link>
             

        
            <Link to={'/contribute'} style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }} className='me-3'>CONTRIBUTE</Link>

            <Link to={'/account'}><i className="fa-solid fa-circle-user fa-2xl text-dark"></i></Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header