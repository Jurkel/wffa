import React from 'react'
import { Link } from 'react-router-dom'
import './Roster.css'

class Roster extends React.Component {

  state = {
    rosterInfo: [],
    currentPlayer: '',
    error: null,
  }

  render() {

    const managers = this.props.managerData.map((list, index) => 
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