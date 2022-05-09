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
		<section className='team-section'>
			<Container>
				<Row>
					<Col>
						<div className='section-title text-center'>
							<h2><span>Team</span></h2>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						{/* grid */}
						<div className='team-members'>
							<Member image={ImageOne.src} name='Imad' designation='Co-founder/Business Dev' twitter='https://twitter.com' />
							<Member image={ImageTwo.src} name='Reda' designation='Co-founder/Project Strategist' twitter='https://twitter.com' />
							<Member image={ImageThree.src} name='Kacie' designation='Web3 Developer' twitter='https://twitter.com' />
							<Member image={ImageFour.src} name='Mary Beth' designation='Media expert &amp; Public Relations' twitter='https://twitter.com' />
							<Member image={ImageFive.src} name='Gregory' designation='Community Building &amp; Operations' twitter='https://twitter.com' />
							<Member image={ImageSix.src} name='Ann' designation='Web Designer' twitter='https://twitter.com' />
							<Member image={ImageSeven.src} name='Sharbel' designation='Advisor' twitter='https://twitter.com' />
							<Member image={ImageEight.src} name='Leon' designation='Advisor' twitter='https://twitter.com' />
							<Member image={ImageNine.src} name='Ibrahim' designation='Advisor' twitter='https://twitter.com' />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Team
