import { Col, Container, Row } from 'react-bootstrap'
import CardUtility from './card-utility.png'
import Gold from './gold.svg'

const UtilityToken = () => {
	return (
		<section className='utility-token-section'>
			<Container>
				<Row className='justify-content-center'>
					<Col md={12}>
						<div className='utility-token-box'>
							<div className='section-title text-center'>
								<h2><span>$TRIP</span>UTILITY TOKEN</h2>
								<p>
									All Genesis Pass NFTs generate daily $TRIP. $TRIP will unlocks utility within our ecosystem and will allow you to redeem rewards such as Free Flights, In-Flight
									Upgrades, Travel Experiences & much more!
								</p>
							</div>
							<Row className='justify-content-center'>
								<Col md={10}>
									<div className='utility-card-wrap'>
										<div className='utility-card'>
											<img src={CardUtility.src} alt='' />
										</div>
										<div className='utility-card-text'>
											<h3>1 Staked Genesis Pass</h3>
											<h4>32 days</h4>
											<p>
												Membership level:{' '}
												<span className='gold-color'>
													Gold <img src={Gold.src} alt='' />
												</span>
											</p>
											<div className='utility-bottom'>
												<p>165 $TRIP</p>
												<a href='' className='primary-btn'>
													Claim
												</a>
											</div>
										</div>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default UtilityToken
