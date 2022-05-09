import { Col, Container, Row, Accordion } from 'react-bootstrap'

const Faq = () => {
	return (
		<section className='faq-section'>
			<Container>
				<Row>
					<Col md={12}>
						<div className='section-title text-center'>
							<h2>
								Frequently <span>Asked Questions</span>
							</h2>
						</div>
					</Col>
					<Col md={12}>
						<div className='faq-accordions'>
							<Accordion>
								<Accordion.Item eventKey='0'>
									<Accordion.Header>1. What is TRIP?</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui perferendis nam sint veritatis eligendi ex nesciunt saepe asperiores. Quasi non nobis error.
										Veniam, earum tempora!
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='1'>
									<Accordion.Header>2. When is the official launch?</Accordion.Header>
									<Accordion.Body>TBA</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='2'>
									<Accordion.Header>3. What will the mint price be?</Accordion.Header>
									<Accordion.Body>TBA</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='3'>
									<Accordion.Header>4. What blockchain is it on?</Accordion.Header>
									<Accordion.Body>TBA</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='4'>
									<Accordion.Header>5. How do I get flightlisted?</Accordion.Header>
									<Accordion.Body>TBA</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='5'>
									<Accordion.Header>6. How can I use my NFT?</Accordion.Header>
									<Accordion.Body>TBA</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Faq
