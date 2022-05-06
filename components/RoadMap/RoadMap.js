import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PhaseOne from './PhaseOne'
import PhaseTwo from './PhaseTwo'

const RoadMap = () => {
	const [phase, setPhase] = useState('phase-one')

	const phaseOneTrigger = () => {
		setPhase('phase-one')
	}

	const phaseTwoTrigger = () => {
		setPhase('phase-two')
	}

	return (
		<section className='road-map-section'>
			<Container>
				<Row>
					<Col md={6}>
						<div className='section-title'>
							<h2>
								Our <span>Road Map</span>
							</h2>
						</div>
					</Col>
					<Col md={6}>
						<div className='switcher'>
							<button className={phase === 'phase-one' ? 'active' : ''} onClick={phaseOneTrigger}>
								Phase 1
							</button>
							<button className={phase === 'phase-two' ? 'active' : ''} onClick={phaseTwoTrigger}>
								Phase 2
							</button>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<div className='phase-road-map'>{phase === 'phase-one' ? <PhaseOne /> : <PhaseTwo />}</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default RoadMap
