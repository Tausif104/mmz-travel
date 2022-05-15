import { Col, Container, Row } from 'react-bootstrap'
import Member from './Member'
import ImageOne from './images/1.png'
import ImageTwo from './images/2.png'
import ImageThree from './images/3.png'
import ImageFour from './images/4.png'
import ImageFive from './images/5.png'
import ImageSix from './images/6.png'
import ImageSeven from './images/7.png'
import ImageEight from './images/8.png'
import ImageNine from './images/9.png'

const Team = () => {
  return (
    <section className='team-section' id='team'>
      <Container>
        <Row>
          <Col>
            <div className='section-title text-center' data-aos="fade-in">
              <h2>
                <span>Team</span>
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {/* grid */}
            <div className='team-members' data-aos="fade-up" data-aos-delay="100">
              <Member image={ImageOne.src} name='Imad' designation='Co-founder/Business Dev' linkedIn='https://linkedin.com' twitter='https://twitter.com' />
              <Member image={ImageTwo.src} name='Reda' designation='Co-founder/Project Strategist' twitter='https://twitter.com' linkedIn='https://linkedin.com/' />
              <Member image={ImageThree.src} name='Kacie' designation='Web3 Developer' twitter='https://twitter.com' />
              <Member image={ImageFour.src} name='Mary Beth' designation='Media expert &amp; Public Relations' twitter='https://twitter.com' />
              <Member image={ImageFive.src} name='Gregory' designation='Community Building &amp; Operations' twitter='https://twitter.com' />
              
            </div>
            <div className='team-members columns4' data-aos="fade-up" data-aos-delay="100">
              <Member image={ImageSix.src} name='Ann' designation='Web Designer' />
              <Member image={ImageSeven.src} name='Sharbel' designation='Advisor' twitter='https://twitter.com' />
              <Member image={ImageEight.src} name='Leon' designation='Advisor' linkedIn='https://linkedin.com/' />
              <Member image={ImageNine.src} name='Joey' designation='Community Manager' twitter='https://twitter.com' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Team
