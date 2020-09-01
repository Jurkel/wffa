import React from 'react'
import podcast from '../images/podcast-art.png'
import { Helmet } from 'react-helmet'
import './Podcast.css'

class Podcast extends React.Component {
  render() {
    return (
      <div className='podcast'>
        <div className='podcast-art'>
          <div className='color-block'></div>
          <img className='podcast-image' src={podcast} alt='podcast-artwork' />
        </div>
        <h2>Podcast</h2>
        <div className='podcast-player'>
          <Helmet>
            <script src='https://www.buzzsprout.com/1276340.js?container_id=buzzsprout-large-player-1276340&player=large'></script>
          </Helmet>
          <div id='buzzsprout-large-player-1276340'></div>
        </div>
      </div>
    )
  }
}

export default Podcast;