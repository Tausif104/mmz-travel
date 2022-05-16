import { Container, Row, Col } from 'react-bootstrap'
import BannerShape from './banner-shape.png'
import BannerCard from './card.gif'
import Plane from './plane.png'

const Banner = () => {
	return (
		<section className='banner-section'>
			<Container>
				<Row>
					<Col lg={6}>
						<div className='banner-text' data-aos="fade-right">
							<h1>
								Get Ready <br /> <span>for Take-Off</span>
							</h1>
							<p>The NFT Every Travellers Needs</p>
							<a className='banner-btn desktop-btn' href='#'>
								<i className='fab fa-discord'></i> Join Discord
							</a>
							<img className='banner-plane' src={Plane.src} alt='' />
						</div>
					</Col>
					<Col lg={6}>
						<div className='banner-card' data-aos="fade-left">
							<img className='img-fluid' src={BannerCard.src} alt='banner-card.gif' />
						</div>
						<div className="mobile-btn-wrap">
							<a className='banner-btn mobile-btn' href='#'>
								<i className='fab fa-discord'></i> Join Discord
							</a>
						</div>
					</Col>
				</Row>
			</Container>
			<img className='banner-shape' src={BannerShape.src} alt='banner-card.png' />
		</section>
	)
}

export default Banner
