import React from 'react'
import zeke from '../images/Zeke.png'
import bosa from '../images/Bosa.png'
import thomas from '../images/mike-thomas.png'
import radial from '../images/radial.png'
import './Home.css'

class Home extends React.Component {
    state = {
      best: '',
      worst: '',
      most: '',
      least: '',
      scoreInfo: []
    }
  

  // bestRecord = () => {
  //   let best = 0;
  //   let info = this.state.scoreInfo;

  //   info.forEach(score => {
  //     if (best < score.settings.waiver_position) {
  //       this.setState({ best: score.owner_id })
  //     } 
  //   })
  // }

  componentDidMount() {

    let best = 0;
    let info = this.state.scoreInfo;

    fetch(`https://api.sleeper.app/v1/league/590186196781543424/rosters`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          scoreInfo: data
        })
        console.log(this.state.scoreInfo)
      })
      .catch(error => this.setState({ error }))

    info.forEach(score => {
      if (best < score.settings.wins) {
        return this.setState({ best: score.owner_id })
      } 
    })
  }

  render() {
    return (
      <div className='home'>
        <div className='hero-image'>
          <img className='radial' src={radial} alt='colored radial' />
          <img className='bosa' src={bosa} alt='nick bosa' />
          <img className='zeke' src={zeke} alt='zeke elliot' />
          <img className='thomas' src={thomas} alt='mike thomas' />
          
        </div>

        <h1 className='home-text'>
          <span className='beige beige1'>WORLD</span><br /> 
          <span className='hero-text hero-fantasy'>FANTASY</span> <br /><span className='hero-text'>FOOTBALL <br /></span>
          <span className='beige beige2'>ALLIANCE</span>
        </h1>
        
        <div className='leaderboard'>
          <h1>Leaderboard</h1>
          <h3>Most points:</h3>
          <h3>Least points:</h3>
          <h3>Best record:</h3><h3>{this.state.best}</h3>
          <h3>Worst record:</h3>
        </div>
      </div>
    )
  }
}

export default Home