import React from 'react';
import zeke from '../images/Zeke.png';
import bosa from '../images/Bosa.png';
import thomas from '../images/mike-thomas.png';
import radial from '../images/radial.png';
import { Link } from 'react-router-dom';
import './Home.css';
import {API_ROSTER} from '../config';
import {API_MANAGER} from '../config';

class Home extends React.Component {
    state = {
      best: '',
      worst: '',
      most: '',
      least: '',
      scoreInfo: []
    }

  // calculating which manager is in the lead/last place
  calculatePlacement = (info) => {
    let wins = [];
    let losses = [];
    let totalManagers = info.length;

    //sort win/losses
    info.sort((a, b) => {
      return a.settings.wins - b.settings.wins;
    })

    let winOverall = info[totalManagers - 1].settings.wins;
    let lossOverall = info[0].settings.losses;

    info.forEach((i, index) => {
      if(i.settings.wins === winOverall) {
        wins.push(i);
      } else if(i.settings.losses === lossOverall) {
        losses.push(i);
      }

      if(index === totalManagers - 1) {
        wins.sort((a, b) => {
          return b.settings.fpts - a.settings.fpts;
        })

        losses.sort((a, b) => {
          return a.settings.fpts - b.settings.fpts;
        })

        fetch(`${API_MANAGER}` + wins[0].owner_id)
        .then(res => res.json())
        .then(manager => {
          if(manager) {
            this.setState({ best: manager[0].display_name });
          }
        })
        .catch(err => console.log(err))

        fetch(`${API_MANAGER}` + losses[0].owner_id)
        .then(res => res.json())
        .then(manager => {
          if(manager) {
            this.setState({ worst: manager[0].display_name });
          }
        })
        .catch(err => console.log(err))
      }
    })
  }

  // figuring out who has the most/least points in the league
  calculatePointsPlacement = (info) => {
    let totalManagers = info.length;

    //sort best/worst pts
    info.sort((a, b) => {
      return a.settings.fpts - b.settings.fpts;
    })
    
    fetch(`${API_MANAGER}` + info[0].owner_id)
    .then(res => res.json())
    .then(manager => {
      if(manager) {
        this.setState({ least: manager[0].display_name });
      }
    })
    .catch(err => console.log(err))
    

    fetch(`${API_MANAGER}` + info[totalManagers - 1].owner_id)
    .then(res => res.json())
    .then(manager => {
      if(manager) {
        this.setState({ most: manager[0].display_name });
      }
    })
    .catch(err => console.log(err))
  }

  // fetches roster data for calculations
  componentDidMount() {

    fetch(`${API_ROSTER}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          scoreInfo: data
        }, () => {
          this.calculatePointsPlacement(this.state.scoreInfo);
          this.calculatePlacement(this.state.scoreInfo);
        })
      })
      .catch(error => this.setState({ error }))
  }
  
  render() {

    return (
      <div className='home'>
        <div className='hero-image'>
          <img className='radial' src={radial} alt='colored radial' />
          <img className='bosa' src={bosa} alt='nick bosa' />
          <img className='zeke' src={zeke} alt='zeke elliot' />
          <img className='thomas' src={thomas} alt='mike thomas' />

          <div className='button-wrapper'>
            <h3>Find out stats about the league.</h3>
            <Link to='/roster'>
              <button className='roster-button' type='button'>
                Click Here
              </button>
            </Link>
          </div>
          
          
        </div>

        <h1 className='home-text'>
          <span className='beige beige1'>WORLD</span><br /> 
          <span className='hero-text hero-fantasy'>FANTASY</span> <br /><span className='hero-text'>FOOTBALL <br /></span>
          <span className='beige beige2'>ALLIANCE</span>
        </h1>
        
        <div className='leaderboard'>
          <h1>Leaderboard</h1>
          <div className='leaderboard-stat'>
            <h3>Most points:</h3><h4>{this.state.most}</h4>
          </div>
          <div className='leaderboard-stat'>
            <h3>Least points:</h3><h4>{this.state.least}</h4>
          </div>
          <div className='leaderboard-stat'>
            <h3>Leader:</h3><h4>{this.state.best}</h4>
          </div>
          <div className='leaderboard-stat'>
            <h3>Last Place:</h3><h4>{this.state.worst}</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Home