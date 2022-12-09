import React from 'react'
import './LiveCarousel.css'
import livematch from '../../../assets/livematch.svg'
const LiveCarousel = () => {
  return (
    <div>
      <div className='live-container'>
        <p className='heading'>Important Matches</p>
        <img src={livematch} alt="" className='live-carousel'/>
      </div>
    </div>
  )
}

export default LiveCarousel
