import { Col, Container, Row } from 'react-bootstrap'
import CardUtility from './card-utility.png'
import Gold from './gold.svg'

const UtilityToken = () => {
	return (
		<section className='utility-token-section'>
			<Container>
				<Row>
					<Col md={12}>
						<div className='utility-token-box'>
							<h2>$TRIP UTILITY TOKEN</h2>
							<p>
								All Genesis Pass NFTs generate daily $TRIP. $TRIP will unlocks utility within our ecosystem and will allow you to redeem rewards such as Free Flights, In-Flight
								Upgrades, Travel Experiences & much more!
							</p>
							<Row>
								<Col md={6}>
									<div className='utility-card'>
										<img src={CardUtility.src} alt='' />
										<h4>1 Staked Genesis Pass</h4>
									</div>
								</Col>
								<Col md={6}>
									<div className='utility-card-text'>
										<h3>32 days</h3>
										<p>
											Membership level:{' '}
											<span className='gold-color'>
												Gold <img src={Gold.src} alt='' />
											</span>
										</p>
										<div className='utility-bottom d-flex justify-content-between'>
											<p>165 $TRIP</p>
											<a href='' className='primary-btn'>
												Claim
											</a>
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
