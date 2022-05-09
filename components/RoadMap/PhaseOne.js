import { Col, Row } from 'react-bootstrap'
import ImageOne from './images/phase-one/1.png'
import ImageTwo from './images/phase-one/2.png'
import ImageThree from './images/phase-one/3.png'
import ImageFour from './images/phase-one/4.png'
import ImageFive from './images/phase-one/5.png'

const PhaseOne = () => {
	return (
		<div className='grid-wrapper phase-one'>
			{/* single phase-one  */}
			<div className='phase-item'>
				<div className='phase-icon'>
					<img src={ImageOne.src} alt='' />
				</div>
				<h4>Take-Off</h4>
				<p>TRIP Genesis Pass will be minted on the Ethereum blockchain</p>
			</div>
			{/* single phase-one  */}
			<div className='phase-item'>
				<div className='phase-icon'>
					<img src={ImageTwo.src} alt='' />
				</div>
				<h4>Community</h4>
				<p>Lifetime access to the TRIP Community. Plan your itineraries, learn travel hacks, connect with other travellers.</p>
			</div>
			{/* single phase-one  */}
			<div className='phase-item'>
				<div className='phase-icon'>
					<img src={ImageThree.src} alt='' />
				</div>
				<h4>Perks and benefits</h4>
				<p>Receive access to Exclusive negotiated rates and privileges with travel-related companies.</p>
			</div>
			{/* single phase-one  */}
			<div className='phase-item'>
				<div className='phase-icon'>
					<img src={ImageFour.src} alt='' />
				</div>
				<h4>Giveaway</h4>
				<p>TRIP Holders get exclusive access to flights and travel experience giveaway.</p>
			</div>
			{/* single phase-one  */}
			<div className='phase-item'>
				<div className='phase-icon'>
					<img src={ImageFive.src} alt='' />
				</div>
				<h4>IRL Event</h4>
				<p>TRIP NFTs also serve as free passes to all TRIP yearly in-real-life events and community meetups.</p>
			</div>
		</div>
	)
}

export default PhaseOne
