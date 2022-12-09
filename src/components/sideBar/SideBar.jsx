import React from 'react'
import './SideBar.css'
import articles from "./../../assets/articles.svg"
import cricket from "./../../assets/cricket.svg"
import football from "./../../assets/football.svg"
import home from "./../../assets/home.png"
import leftarrow from "./../../assets/leftarrow.svg"
import tennis from "./../../assets/tennis.png"
import './SideBar.css'
const SideBar = () => {
  return (
    <div className='sidebar-container'>
      <div className='logo'>
        CRICNEWS
      </div>

      <div>
        <div className='navlinks-heading-container'>
          <p>NavLinks</p>
          <img src={leftarrow} alt="" className='leftarrow'/>
        </div>

        <div>
          <div className='home-text-container'>
            <img src={home} alt="" className='homeIcon'/>
            <p className='home-text'>Home</p>
          </div>
          <div className='articles-text-container'>
            <img src={articles} alt="" className='articlesIcon'/>
            <p className='articles-text'>Articles</p>
          </div>
        </div>
      </div>

      <div>
        <div className='games-heading'>
          <p className='games-text'>Games</p>
        </div>

        <div className='cricket-container'>
          <img src={cricket} alt="" />
          <p className='cricket-text'>Cricket</p>
        </div>

        <div className='tennis-container'>
          <img src={tennis} alt="" />
          <p className='tennis-text'>Tennis</p>
        </div>

        <div className='football-container'>
          <img src={football} alt="" />
          <p className='football-text'>Football</p>
        </div>


      </div>
    </div>
  )
}

export default SideBar
