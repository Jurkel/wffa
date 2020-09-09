import React from 'react'
import { Link } from 'react-router-dom'
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

    const managers = this.state.rosterInfo
    return (
      <div className='roster-list'>
        <h2>Manager Roster</h2>
        <ul>
          {/* {managers.forEach((list, index) => 
            <Link to={{
              pathname: `/${list[index].display_name}`,
              state: {
                userId: `${list[index].user_id}`
              }
            }}>{list[index].display_name}</Link>
          )} */}
        </ul>
      </div>
    )
  }
}

export default Roster;