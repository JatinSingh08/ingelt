import React from 'react'
import LiveCarousel from './liveCarousel/LiveCarousel'
import './Body.css'
import MatchesTable from './matchesTable/MatchesTable'
const Body = () => {
  return (
    <div className='body'>
      <LiveCarousel />
      <MatchesTable />
    </div>
  )
}

export default Body
