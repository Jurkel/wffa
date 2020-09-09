import React from 'react'
import zeke from '../images/Zeke.png'
import bosa from '../images/Bosa.png'
import './Home.css'

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <div className='hero-image'>
          <img className='bosa' src={bosa} alt='nick bosa' />
          <img className='zeke' src={zeke} alt='zeke elliot' />
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
}

export default Home