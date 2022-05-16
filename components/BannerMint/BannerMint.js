import {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import BannerShape from './banner-shape.png'
import BannerCard from './card.gif'
import Plane from './plane.png'

const Banner = () => {
	const [mint, setMint] = useState(1);
	const [pass, setPass] = useState(0.1);

	const handleIncreaseCount =()=>{
		setMint( Number(mint)+ 1 );
	}
	const handleDecreaseCount =()=>{
		if(mint > 0){
			setMint(mint - 1);
		}
	}
	return (
		<section className='banner-section mint-banner'>
			<Container>
				<Row>
					<Col lg={7}>
						<div className='banner-text' data-aos="fade-right">
							<h1>
							Mint Your <span>TRIP NFT Genesis Pass</span>
							</h1>
							<p><span>3333</span> Genesis Pass Remaining</p>
							<div className='banner-btn desktop-btn'>
								<span onClick={() => handleDecreaseCount()} className='fas fa-minus'></span> 
									Mint {mint} Pass @ { Number(mint * pass).toFixed(2)} ETH 
								<span  onClick={() => handleIncreaseCount()}  className='right-icon fas fa-plus'></span>
							</div>
							<img className='banner-plane' src={Plane.src} alt='' />
						</div>
					</Col>
					<Col lg={5}>
						<div className='banner-card' data-aos="fade-left">
							<img className='img-fluid' src={BannerCard.src} alt='banner-card.gif' />
						</div>
						<div className="mobile-btn-wrap">
							<div className='banner-btn mobile-btn'>
								<span onClick={() => handleDecreaseCount()} className='fas fa-minus'></span> 
									Mint {mint} Pass @ { Number(mint * pass).toFixed(2)} ETH 
								<span  onClick={() => handleIncreaseCount()}  className='right-icon fas fa-plus'></span>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<img className='banner-shape' src={BannerShape.src} alt='banner-card.png' />
		</section>
	)
}

export default Banner
