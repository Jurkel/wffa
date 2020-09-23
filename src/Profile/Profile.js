import React from 'react'
import player from '../images/player.png'
import Bio from '../Bio/Bio'
import Stats from '../Stats/Stats'
import Starters from '../Starters/Starters'
import { withRouter } from 'react-router-dom'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './Profile.css'

class Profile extends React.Component {

  render() {
    console.log('from profile - managerbio: ' + JSON.stringify(this.props.location.state.managerBio));
    console.log('from profile - rosterStats: ' + JSON.stringify(this.props.location.state.rosterStats));
    console.log('from profile - starters: ' + JSON.stringify(this.props.location.state.starters));

    return (
      <div className='roster-profile'>
        <div className='player-wrapper'>
          <img className='player-image' src={player} alt='dynamic player name' />
          <div className='player-name'>{this.props.location.state.managerBio.firstname} {this.props.location.state.managerBio.lastname}</div>
        </div>
        <div className='player-info'>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>
                <Bio managerData={this.props.location.state.managerBio} />
              </Slide>
              <Slide index={1}>
                <Stats rosterData={this.props.location.state.rosterStats} />
              </Slide>
              <Slide index={2}>
                <Starters starters={this.props.location.state.starters} />
              </Slide>
            </Slider>
            <DotGroup />
          </CarouselProvider>
        </div>
      </div>
    )
  }
}

export default withRouter(Profile);