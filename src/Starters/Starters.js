import React from 'react'
import './Starters.css'

class Starters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starters: []
    }
  }

  // componentDidMount() {
  //   console.log('starter data 1 => ' + JSON.stringify(this.props.rosterData));
  //   const starterArray = this.props.rosterData.starters;
  //   console.log('starter array 1 => ' + JSON.stringify(starterArray))
  //   this.setState({
  //     starters: starterArray
  //   }, () => {
  //     console.log('starter array set state => ' + this.state.starters)
  //   })
  // }

  render() {

    console.log('This is render from starters' + this.props.starters)
    // const starters = this.props.starters;
    let starters = this.props.starters.map((list, key) => 
      <div 
      key={key}
      className='starter-flex'>
        <h4>{list}</h4>
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