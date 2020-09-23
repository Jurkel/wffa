import React from 'react'
import player from '../images/player.png'
import Bio from '../Bio/Bio'
import Stats from '../Stats/Stats'
import Starters from '../Starters/Starters'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './Profile.css'

class Profile extends React.Component {
  state = {
    rosterStats: {},
    managerBio: {}
  }

  findManagerId = (id) => {
    return this.props.managerData.find(roster => {
        return roster.owner_id === id;
    })
  }

  findRosterStats = (id) => {
    return this.props.rosterData.find(roster => {
        return roster.owner_id === id;
    })
  }

  componentDidMount() {
    let userId = this.props.userId;
    let userObj = this.findManagerId(userId);
    let rosterObj = this.findRosterStats(userId);

    this.setState({ 
      managerBio: userObj, 
      rosterStats: rosterObj
    }, () => {
      console.log('Roster => ' + JSON.stringify(this.state.rosterStats));
      console.log('Manager Stats => ' + JSON.stringify(this.state.managerBio));
    })

    
  }

  render() {

    let rosterStats = this.state.rosterStats;
    let managerBio = this.state.managerBio;

    return (
      <div className='roster-profile'>
        <div className='player-wrapper'>
          <img className='player-image' src={player} alt='dynamic player name' />
          <div className='player-name'>{managerBio.firstname} {managerBio.lastname}</div>
        </div>
        <div className='player-info'>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>
                <Bio managerData={managerBio} />
              </Slide>
              <Slide index={1}>
                <Stats rosterData={rosterStats} />
              </Slide>
              <Slide index={2}>
                <Starters rosterData={rosterStats} />
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