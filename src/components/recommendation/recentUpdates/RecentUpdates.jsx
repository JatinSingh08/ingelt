import React from 'react'
import './RecentUpdates.css'
import ufc from '../../../assets/ufc.svg'
import ufcImage from '../../../assets/ufc-image.svg'
const RecentUpdates = () => {
  return (
    <div className='recentUpdates-container'>
      <div>
        <p className='recentUpdates-text'>Recent Updates</p>
        <div className='ufc-image-container'>
          <img src={ufcImage} alt="" className='ufc-image'/>
          <div className='ufc-text'>UFC</div>
          <div className='sport-text'>Sport</div>
          <div className='no-of-events'>Today Events:14</div>
        </div>
      </div>

      <div className='container-second'>
        <div className='ufc-image-container'>
          <img src={ufcImage} alt="" className='ufc-image'/>
          <div className='ufc-text'>UFC</div>
          <div className='sport-text'>Sport</div>
          <div className='no-of-events'>Today Events:14</div>
        </div>
      </div>

      <div className='container-third'>
        <div className='ufc-image-container'>
          <img src={ufcImage} alt="" className='ufc-image'/>
          <div className='ufc-text'>UFC</div>
          <div className='sport-text'>Sport</div>
          <div className='no-of-events'>Today Events:14</div>
        </div>
      </div>

      <div className='container-fourth'>
        <div className='ufc-image-container'>
          <img src={ufcImage} alt="" className='ufc-image'/>
          <div className='ufc-text'>UFC</div>
          <div className='sport-text'>Sport</div>
          <div className='no-of-events'>Today Events:14</div>
        </div>
      </div>
    </div>
  )
}

export default RecentUpdates