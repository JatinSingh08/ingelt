import React from 'react'
import './Recommendation.css'
import PopularVideos from './popularVideos/PopularVideos'
import RecentUpdates from './recentUpdates/RecentUpdates'

const Recommendation = () => {
  return (
    <div className='recommendation'>
      <PopularVideos />
      <RecentUpdates />
    </div>
  )
}

export default Recommendation
