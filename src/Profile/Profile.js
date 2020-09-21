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
    userStats: {},
    userBio: {}
  }

  retreiveName = (id) => {
    let data = this.props.managerData;

    data.forEach(name => {
      if (id === name.owner_id) {
        return ( name.display_name ) 
      }
      console.log('ID >> ' + id)
      console.log('Profile Data >> ' + data)
    })
  }

  findRosterUser = (id) => {
    return this.props.managerData.find(roster => {
        return roster.owner_id === id;
    })
  }
  
  render() {
    let userId = this.props.userId;
    let userObj = this.findRosterUser(userId);
    console.log('Profile current user: ' + JSON.stringify(userObj));

    return (
      <div className='roster-profile'>
        <div className='player-wrapper'>
          <img className='player-image' src={player} alt='dynamic player name' />
    <div className='player-name'>{userId}</div>
        </div>
        <div className='player-info'>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>
                <Bio managerData={this.props.managerData} />
              </Slide>
              <Slide index={1}>
                <Stats rosterData={this.props.rosterData} />
              </Slide>
              <Slide index={2}>
                <Starters rosterData={this.props.rosterData}/>
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