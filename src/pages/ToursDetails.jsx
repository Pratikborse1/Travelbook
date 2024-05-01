import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Form, ListGroup, Row } from 'reactstrap'
import tourData from '../assets/data/tours'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'
import '../styles/tour-details.css'
import calculateAvgRating from '../utils/avgRating'

const ToursDetails = () => {

  const {id} = useParams()
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)

  //this is an static data later we will call our API and load our data from database
  const tour = tourData.find(tour => tour.id === id)

  //destructure properties from tour object
  const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tour

  const {totalRating, avgRating} = calculateAvgRating(reviews)

  //format date

  const options = { day:'numeric', month:'long', year:'numeric'}

const submitHandler = e=>{
  e.preventDefault()
  const reviewText = reviewMsgRef.current.value
  alert(`${reviewText}, ${tourRating}`)

  //later call on API
}


  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className='tour__content'>
              <img src={photo} alt=''></img>

              <div className='tour__info'>
                <h2>{title}</h2>

                <div className='d-flex align-items-center gap-5'>
                <span className='tour__rating d-flex align-items-center gap-1'>
                <i class="ri-star-s-line" style={{color: 'var(--secondary-color)'}}></i>
                {calculateAvgRating === 0? null : avgRating}
                {totalRating===0?'not rated': (<span>({reviews?.length})</span>)}
                </span>

                  <span>
                  <i class="ri-map-pin-user-fill"></i>{address}
                  </span>

                </div>
                <div className='tour__extra-details'>
                  <span><i class="ri-map-pin-5-fill"></i>{city}</span>
                  <span><i class="ri-money-dollar-circle-line"></i>${price} /per person</span>
                  <span><i class="ri-pin-distance-line"></i>{distance} k/m</span>
                  <span><i class="ri-group-2-fill"></i>{maxGroupSize} people</span>
                </div>
                <h5>description</h5>
                <p>{desc}</p>
              </div>

              {/* {tour reviews section} */}
              <div className='tour__reviews mt-4'>
                <h4>Reviews({reviews?.length}reviews)</h4>

                <Form onSubmit={submitHandler}>
                  <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                    <span onClick={()=> setTourRating(1)}>
                    1 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=> setTourRating(2)}>
                    2 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=> setTourRating(3)}>
                    3 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=> setTourRating(4)}>
                    4 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=> setTourRating(5)}>
                     5<i class="ri-star-s-fill"></i>
                    </span>
                  </div>

                  <div className='review__input'>
                    <input type='text' ref={reviewMsgRef} placeholder='share your thoughts' required></input>
                    <button className='btn primary__btn text-white'>
                      SUBMIT
                    </button>
                  </div>
                </Form>
                <ListGroup className='user__reviews'>
                  {
                    reviews?.map(review=>(
                      <div className='review__item'>
                        <img src={avatar} alt=''></img>

                        <div className='w-100'>
                          <div className='d-flex align-items-center justify-content-between'>
                          <div>
                            <h5>Pratik</h5>
                            <p>{new Date('03-17-2024').toLocaleDateString('en-US', options)}</p>
                            </div>
                          <span className='d-flex align-items-center'>
                            5<i class="ri-star-s-fill"></i> 
                          </span>
                          </div>
                        <h6>Amazing tour</h6>
                        
                        </div>
                      </div>
                    ))
                  }
                </ListGroup>
              </div>
              {/* {tour reviews section end} */}
            </div>
          </Col>

          <Col lg='4'>
            <Booking tour={tour} avgRating={avgRating}/>
          </Col>
        </Row>
      </Container>
    </section>
    <Newsletter/>
    </>
  )
}

export default ToursDetails