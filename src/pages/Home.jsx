import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import experienceImg from '../assets/images/experience.png'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import Testimonials from '../components/Testimonial/Testimonials'
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery'
import ServiceList from '../services/ServiceList'
import Newsletter from '../shared/Newsletter'
import SearchBar from '../shared/SearchBar'
import Subtitle from '../shared/Subtitle'
import '../styles/home.css'

const Home = () => {
  return <>
    <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='hero__content'>
            <div className='hero__subtitle d-flex align-items-center'>
              <Subtitle subtitle={'Know Before You Go'}></Subtitle>
              <img src={worldImg} alt=''></img>
            </div>
            <h1>Traveling opens the door to creating <span className='highlight'>Memories</span></h1>
            <p>soisjfdigheiogfergiryiggydfgiuhdfgtgtututugdgldfgdflg</p>
          </div>
        </Col>

        <Col lg='2'>
          <div className='hero__img-box'>
            <img src={heroImg} alt=''></img>
          </div>
        </Col>
        <Col lg='2'>
          <div className='hero__img-box mt-4'>
            <video src={heroVideo} alt='' controls></video>
          </div>
        </Col>
        <Col lg='2'>
          <div className='hero__img-box mt-5'>
            <img src={heroImg02} alt=''></img>
          </div>
        </Col>

        <SearchBar/>
      </Row>
      </Container>
    </section>
    {/* hero section start */}
    <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className='services__subtitle'>What we serve</h5>
          <h2 className='services__title'>we offer out best services</h2>
        </Col>
        <ServiceList />
      </Row>
    </Container>
    </section>

    {/* Feature tour start */}
    <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <Subtitle subtitle={"Explore"}/>
          <h2 className='featured__tour-title'>Our Featured Tours</h2>
        </Col>
        <FeaturedTourList/>
      </Row>
    </Container>
    </section>
    {/* Feature tour end */}


    {/* experience section start*/}
    <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='experience__content'>
            <Subtitle subtitle={'Experience'}></Subtitle>
            <h2>With our all experience <br/> we will serve you</h2>
            <p>me aahe mulga tu aahe mulgi baaki bghu mg <br/> samjla kaa</p>
          </div>
          <div className='counter__wrapper d-flex align-items-center gap-5'>
            <div className='counter__box'>
              <span>12k+</span>
              <h6>Successful trip</h6>
            </div>
            <div className='counter__box'>
              <span>2k+</span>
              <h6>Regular clients</h6>
            </div>
            <div className='counter__box'>
              <span>5+</span>
              <h6>Years experience</h6>
            </div>
          </div>
        </Col>
        <Col lg='6'>
          <div className='experience__img'>
            <img src={experienceImg} alt=''></img>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
    {/* experience secrion end*/}

    {/* gallery section start */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'}></Subtitle>
            <h2 className='gallery__title'>Visit our gallery tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    {/* gallery section end */}
     

     {/* testimonial section start */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <subtitle subtitle={'Fans Love'}></subtitle>
              <h2 className='testimonial__title'>What out fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>
     {/* testimonial section end */}
     <Newsletter/>
  </>
}

export default Home