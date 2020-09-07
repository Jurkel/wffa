import React from 'react'
import player from '../images/player.png'
import Bio from '../Bio/Bio'
import Stats from '../Stats/Stats'
import Starters from '../Starters/Starters'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import './Profile.css'

function Profile() {
  return (
    <div className='roster-profile'>
      <div className='player-wrapper'>
        <img className='player-image' src={player} alt='dynamic player name' />
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

        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
        
        
        
      </div>
    </div>
  )
}

export default Profile;