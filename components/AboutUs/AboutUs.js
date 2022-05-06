import { Col, Container, Row } from 'react-bootstrap'
import Phones from './phones.png'
import CardOne from './cards/1.png'
import CardTwo from './cards/2.png'
import CardThree from './cards/3.png'

const AboutUs = () => {
	return (
		<section className='about-section'>
			<div className='background-cards'>
				<img className='card-one' src={CardOne.src} alt='' />
				<img className='card-two' src={CardTwo.src} alt='' />
				<img className='card-three' src={CardThree.src} alt='' />
			</div>
			<Container>
				<Row>
					<Col md={12}>
						<div className='section-title'>
							<h2>
								<span>About</span> Us
							</h2>
							<p>
								TRIP is a tech startup on a mission to revolutionize the way people travel. Our vision is to use Web 3.0 technologies such as blockchain and NFTs to create a new,
								seamless and democratized travel experience for travellers all around the world. TRIP Genesis holders will be able to earn $TRIP tokens which could be redeemed for
								flight tickets, in-flight upgrades, and more!
							</p>
							<img src={Phones.src} alt='' />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default AboutUs
