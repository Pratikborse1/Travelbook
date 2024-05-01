import React from 'react'
import './newsLetter.css'

import { Col, Container, Row } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='newsletter__content'>
                        <h2>Subscribe now to get useful traveling information.</h2>

                        <div className='newsletter__input'>
                            <input type='email' placeholder='Enter your email'></input>
                            <button className='btn newsletter__btn'>Subsribe</button>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit, explicabo provident hic distinctio molestias voluptates voluptates nobis alias.....</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className='newsletter__img'>
                        <img src={maleTourist} alt=''></img>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter