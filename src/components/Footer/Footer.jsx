import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import logo from '../../assets/images/logo.png'

const quick___links = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },
]

const qiuck___links2 = [
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },
]

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className='logo'>
              <img src={logo} alt=''></img>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>


              <div className='social__links d-flex align-items-center gap-4'>
                <span>
                  <Link to='#'><i class="ri-youtube-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-github-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-instagram-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-linkedin-fill"></i></Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Discover</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick___links.map((item,index) =>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {
                qiuck___links2.map((item,index) =>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer__link-title'>Contact</h5>
            <ListGroup className='footer__quick-links'>

                  <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span><i class="ri-mail-send-fill"></i></span>
                      Mail:
                    </h6>

                    <p className='mb-0'>pratikborse401@gmail.com</p>
                  </ListGroupItem>
                  <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span><i class="ri-map-pin-3-fill"></i></span>
                      Address:
                    </h6>

                    <p className='mb-0'>Maharashtra, India</p>
                  </ListGroupItem>
                  <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span><i class="ri-phone-fill"></i></span>
                      Phone:
                    </h6>

                    <p className='mb-0'>+91 86692 14414</p>
                  </ListGroupItem>
                
            </ListGroup>
            
          </Col>
          <Col lg='12' className='text-center pt-5'>
              <p className='copyright'>copyright {year}, design and developed by Pratik. All rights reserved.</p>
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer