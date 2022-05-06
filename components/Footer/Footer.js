import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row className='justify-content-center'>
					<Col md={8}>
						<div className='footer-content'>
							<div className='footer-social'>
								<ul>
									<li>
										<a href=''>
											<i className='fab fa-twitter'></i>
										</a>
									</li>
									<li>
										<a href=''>
											<i className='fab fa-discord'></i>
										</a>
									</li>
								</ul>
							</div>
							<h4>Get TRIP Development</h4>
							<h2>Updates straight to your Inbox</h2>
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
