import React from 'react'
import './Starters.css'

class Starters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starters: [],
      error: ''
    }
  }

  render() {

    let starters = this.props.starters.map((starter, index) => 
      <div key={index} className='starter-flex'>
        <h4>{starter.player.position}:</h4><h3>  {starter.player.full_name} - <span className='starters-team'>{starter.player.team}</span></h3>
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