import React from 'react';
import './Starters.css';
// import { withRouter } from 'react-router-dom'
// import Config from '../config';

class Starters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starters: [],
      error: ''
    }
  }

  // componentDidMount = () => {
  //   let param = this.props.starters.toString().replace(/,/g, "-");
  //   console.log('param: ' + param);
  //   fetch(`https://intense-mesa-76351.herokuapp.com/player/ids/` + param)
  //   .then(res => res.json())
  //   .then((starters) => {
  //     if(starters) {
  //       // console.log('starters from retrieve starter names' + JSON.stringify(starters))
  //       this.setState ({ starters }) 
  //     }
  //   })
  //   .catch(error => this.setState({ error }))
  // }

  render() {

    // this.retrieveStarterNames();
    // const starters = this.state.starters;
    // console.log('starters from state > ' + JSON.stringify(starters))
    let starters = this.props.starters.map((starter, index) => 
       <div key={index}>
      {starter.player.position} - {starter.player.full_name}
    </div>
    )

  
  return (
    <div className='starters-wrapper'>
      <h2 className='player-title'>Starters</h2>
      <div className='starter-list'>
        {starters}
      </div>
    </div>
  )
  }
}

export default Starters;