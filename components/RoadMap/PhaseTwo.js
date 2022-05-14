import { Col, Row } from 'react-bootstrap'
import ImageOne from './images/phase-one/1.png'
import ImageTwo from './images/phase-one/2.png'
import ImageThree from './images/phase-one/3.png'
import ImageFour from './images/phase-one/4.png'
import ImageFive from './images/phase-one/5.png'

const PhaseTwo = () => {
  return (
    <div className='grid-wrapper phase-one'>
      {/* single phase-one  */}
      <div className='phase-item'>
        <div className='phase-icon'>
          <img src={ImageOne.src} alt='' />
        </div>
        <h4>Genesis Passport mint</h4>
        <p>Holders will get first access for the future collection</p>
      </div>
      {/* single phase-one  */}
      <div className='phase-item'>
        <div className='phase-icon'>
          <img src={ImageTwo.src} alt='' />
        </div>
        <h4>Beta access to the platform</h4>
        <p>
          Travel more Pay less! The more one uses the genesis pass to make purchases, the higher the token drop rate becomes. Personalized traveling experience. We are shaping the platform to reflect
          the users preferences. And this is not everything, our community on discord acts as a major partner in this Travel to Earn journey.
        </p>
      </div>
    </div>
  )
}

export default PhaseTwo
