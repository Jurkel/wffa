import React from 'react'
import Bio from '../Bio/Bio'
import Stats from '../Stats/Stats'
import Starters from '../Starters/Starters'
import { withRouter } from 'react-router-dom'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './Profile.css'

class Profile extends React.Component {

  render() {

    return (
      <div className='roster-profile'>
        <div className='player-wrapper'>
          <img className='player-image' src={require(`../images/${this.props.location.state.managerBio.firstname}.png`)} alt={this.props.location.state.managerBio.display_name} />
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
                <Starters starters={this.props.starters} />
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