import React from 'react'
import zeke from '../images/Zeke.png'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='hero-image'>
        <img className='zeke' src={ zeke } alt='zeke elliot' />
        <h1 className='home-text'>
          <span className='beige'>WORLD</span><br /> 
          <span className='hero-text'>FANTASY <br />FOOTBALL <br /></span>
          <span className='beige'>ALLIANCE</span>
        </h1>
      </div>
      <div className='leaderboard'>
        <h1>Leaderboard</h1>
        <h3>Most points:</h3>
        <h3>Least points:</h3>
        <h3>Best record:</h3>
        <h3>Worst record:</h3>
      </div>
    </div>
  )
}

export default Home