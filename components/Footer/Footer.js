import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer className='footer-area'>
			<Container>
				<Row className='justify-content-center'>
					<Col md={8}>
						<div className='footer-content' data-aos="fade-in">
							<div className='footer-social'>
								<ul>
									<li>
										<a href='https://twitter.com/TRIP_NFT'>
											<i className='fab fa-twitter'></i>
										</a>
									</li>
									<li>
										<a href='https://discord.gg/tripnft'>
											<i className='fab fa-discord'></i>
										</a>
									</li>
								</ul>
							</div>
							<h2>Get TRIP Development</h2>
							<h3>Updates straight to your Inbox</h3>
							<div className='newsletter'>
								<div className='newsletter-form'>
									<input type='email' placeholder='Enter your email address' />
									<input type='submit' value='Sign up' />
								</div>
							</div>
							<div className='copyright-text'>
								<span>&copy; 2022 TRIP NFT. All rights reserved.</span>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
