import React from 'react'
import player from '../images/player.png'
import Bio from '../Bio/Bio'
import Stats from '../Stats/Stats'
import Starters from '../Starters/Starters'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './Profile.css'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
  }

  render() {
    return (
      <div className='roster-profile'>
        <div className='player-wrapper'>
          <img className='player-image' src={player} alt='dynamic player name' />
          <div className='player-name'></div>
        </div>
        <div className='player-info'>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>
                <Bio />
              </Slide>
              <Slide index={1}>
                <Stats />
              </Slide>
              <Slide index={2}>
                <Starters />
              </Slide>
            </Slider>
            <DotGroup />
          </CarouselProvider>
        </div>
      </div>
    )
  }
}

export default Profile;