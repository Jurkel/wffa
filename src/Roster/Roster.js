import React from 'react'
import { Link } from 'react-router-dom'
import './Roster.css'

class Roster extends React.Component {

  state = {
    rosterInfo: [],
    starters: [], 
    error: ''
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

  render() {

    const managers = this.props.managerData.map((list, index) => 
    <li key={index}>
      <img src={require(`../images/${list.firstname}.png`)} alt={list.display_name} />
      <Link 
        style={{
          paddingLeft: 13,
          textDecoration: 'none',
          color: '#F2F2F2',
          fontWeight: 'bold'
        }}
        to={{
          pathname: `/${list.display_name}`,
          state: {
            managerBio: this.findManagerId(list.owner_id),
            rosterStats: this.findRosterStats(list.owner_id)
          }
        }}
        onClick={() => {this.props.clickMe(list.owner_id)}}
        
      >
          {list.display_name} 
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