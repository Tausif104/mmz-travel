import { Container, Row, Col } from 'react-bootstrap'
import BannerCard from './card.png'
import Plane from './plane.png'

const Banner = () => {
	return (
		<section className='banner-section'>
			<Container>
				<Row className='align-items-center'>
					<Col md={6}>
						<div className='banner-text'>
							<h1>
								Get Ready <span>for Take-Off</span>
							</h1>
							<p>The NFT Every Travellers Needs</p>
							<a href='#'>
								<i className='fab fa-discord'></i> Join Discord
							</a>
							<img src={Plane.src} alt='' />
						</div>
					</Col>
					<Col md={6}>
						<div className='banner-card'>
							<img className='img-fluid' src={BannerCard.src} alt='banner-card.png' />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Banner
