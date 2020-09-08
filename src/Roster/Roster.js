import React from 'react'
import { API_ROSTER } from '../config'
import roster from '../Managers'
import './Roster.css'

class Roster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rosterInfo: [],
      currentPlayer: '',
      error: null
    }
  }
  
  componentDidMount() {
    fetch({API_ROSTER})
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(data => {
        this.setState({
          rosterInfo: data
        })
        console.log({API_ROSTER})
      })
      .catch(error => this.setState({ error }))
  }

  render() {
    return (
      <div className='roster-list'>
        <ul>
          {roster.forEach((list, index) => 
            <li>{list.Name}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Roster;