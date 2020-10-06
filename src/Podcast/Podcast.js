import React from 'react';
import podcast from '../images/podcast-art.png';
import spotify from '../images/spotify.png';
import apple from '../images/apple-podcast.png';
import { Helmet } from 'react-helmet';
import './Podcast.css';

class Podcast extends React.Component {
  render() {
    return (
      <div className='podcast'>
        <h2>Podcast</h2>
        <div className='color-block' />
        <div className='laptop-wrapper'>
          <div className='podcast-art'>
            <img className='podcast-image' src={podcast} alt='podcast-artwork' />
          </div>
          <div className='podcast-player'>
            <Helmet>
              <script src='https://www.buzzsprout.com/1276340.js?container_id=buzzsprout-large-player-1276340&player=large'></script>
            </Helmet>
            <div id='buzzsprout-large-player-1276340'></div>
          </div>
        </div>
        <div className='social-icons'>
          <a href='https://open.spotify.com/show/70iTFbizL1oC5lBe0Hd58J?si=bowHOc-YQ1-SWAoR_5Hj9w'>
            <img className='social-icon' src={spotify} alt='spotify-icon' />
          </a>
          <a href='https://podcasts.apple.com/us/podcast/world-fantasy-football-alliance-wffa/id1529054571'>
            <img className='social-icon' src={apple} alt='apple-icon' />
          </a>
        </div>
      </div>
    );
  };
};

export default Podcast;

