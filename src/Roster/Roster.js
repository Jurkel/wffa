import React from 'react'
import config from '../config'
import roster from '../Managers'
import './Roster.css'

class Roster extends React.Component {
  state = {
    rosterInfo: [],
    currentPlayer: '',
    error: null
  }

  componentDidMount() {
    fetch(config.API_ROSTER)
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
      })
      .catch(error => this.setState({ error }))
  }
  render() {
    return (
      <div className='roster-list'>
        <ul>
          {roster.forEach((list, index) => 
            <li>{list[index].name}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Roster;