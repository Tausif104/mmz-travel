import { Col, Container, Row } from 'react-bootstrap'
import Phones from './phones.png'
import CardOne from './cards/1.png'
import CardTwo from './cards/2.png'
import CardThree from './cards/3.png'

const AboutUs = () => {
  return (
    <section className='about-section' id='about'>
      <div className='background-cards'>
        <img className='img-fluid card-one' src={CardOne.src} alt='' />
        <img className='img-fluid card-two' src={CardTwo.src} alt='' />
        <img className='img-fluid card-three' src={CardThree.src} alt='' />
      </div>
      <Container>
        <Row className='justify-content-center'>
          <Col md={10}>
            <div className='section-title text-center'>
              <h2>
                <span>About</span> Us
              </h2>
              <p>
                TRIP is a tech startup on a mission to revolutionize the way people travel. Our vision is to use Web 3.0 technologies such as blockchain and NFTs to create a new, seamless and
                democratized travel experience for travellers all around the world. TRIP Genesis holders will be able to earn $TRIP tokens which could be redeemed for flight tickets, in-flight
                upgrades, and more!
              </p>
            </div>
          </Col>
          <Col md={12}>
            <img className='phone-image' src={Phones.src} alt='' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs
