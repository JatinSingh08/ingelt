import React from 'react'
import './PopularVideos.css'
import video from './../../../assets/video.svg'
const PopularVideos = () => {
  return (
    <div>
      <div className='videos-container'>
        <p className='poupularVideos-heading'>Popular Videos</p>
        <div>
          <img src={video} alt="" className='video'/>
        </div>
      </div>
    </div>
  )
}

export default PopularVideos
