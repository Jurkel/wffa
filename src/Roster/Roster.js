import React from 'react'
// import StatsContext from '../StatsContext'
import { Link } from 'react-router-dom'
import './Roster.css'

class Roster extends React.Component {
  // static contextType = StatsContext;

  state = {
    rosterInfo: [],
    currentPlayer: '',
    error: null,
  }

  componentDidMount() {
    fetch(`https://api.sleeper.app/v1/league/590186196781543424/users`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          rosterInfo: data
        })
        console.log(this.state.rosterInfo)
      })
      .catch(error => this.setState({ error }))
  }

  render() {

    const managers = this.state.rosterInfo.map((list, index) => 
    <li key={index}>
      <Link 
        style={{
          paddingLeft: 13,
          textDecoration: 'none',
          color: '#F2F2F2',
          fontWeight: 'bold'
        }}
        to={{
          pathname: `/${list.display_name}`
        }}
        
        onClick={() => {this.props.clickMe(list.user_id)}}
        
      >
          {list.display_name} - {list.user_id}
          
      </Link>
    </li>);
    

    return (
      
      <div className='roster-list'>
        <h2>Manager Roster</h2>
        <div className='manager-list'>
          <ul>{managers}</ul>
        </div>
      </div>
    )
  }
}

export default Roster;