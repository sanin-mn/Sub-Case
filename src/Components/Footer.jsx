import React from 'react'
import footer_logo from '../Assets/SC_Logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer-07 bg-secondary">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <h4 className='d-inline-block text-white mt-3'>
              <img src={footer_logo} width={80} alt="" />
              Sub Case
            </h4>
            <p className="menu p-3">
              <Link to={'/'} style={{ textDecoration: 'none', color: 'white', margin: '0.5rem' }}>Home</Link>
              <Link to={'/contribute'} style={{ textDecoration: 'none', color: 'white', margin: '0.5rem' }}>Contribute</Link>
              <Link to={'/about'} style={{ textDecoration: 'none', color: 'white', margin: '0.5rem' }}>About</Link>
              <Link to={'/subtitles'} style={{ textDecoration: 'none', color: 'white', margin: '0.5rem' }}>All Sub</Link>
              <Link to={'/admin'} style={{ textDecoration: 'none', color: 'white', margin: '0.5rem' }}>Admin</Link>

            </p>
            <ul className="p-0">
              <i className="fa-brands fa-facebook fa-xl p-2"></i>
              <i className="fa-brands fa-square-instagram fa-xl p-2"></i>
              <i className="fa-brands fa-x-twitter fa-xl p-2"></i>
              <i className="fa-brands fa-telegram fa-xl p-2"></i>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <p className="copyright">
              Copyright &copy; All rights reserved | Sub case subtitle organization
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer