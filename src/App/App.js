import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Podcast from '../Podcast/Podcast'
import Roster from '../Roster/Roster'
import About from '../About/About'
import Profile from '../Profile/Profile'
import './App.css';

class App extends Component {
    state = {
      user: '',
      rosterData: [],
      managerData: [],
      currentUser: {}
    }

  // componentDidUpdate() {
  //   let rosterInfo = this.state.rosterData;

  //   rosterInfo.map(userId => {
  //     return (this.state.user === userId.owner_id ? this.setState({ currentUser }) : '');
  //   })
  // }

  changeUser = (id) => {
    this.setState({ user: id }, () => {
      console.log('changeUser callback: ' + this.state.user)
    })
  }

  componentDidMount() {
    fetch(`https://api.sleeper.app/v1/league/590186196781543424/rosters`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          rosterData: data
        }, () => {
          console.log('callback from App getting rosters: ' + this.state.rosterData)
        })
      })
      .catch(error => this.setState({ error }))

    fetch(`https://intense-mesa-76351.herokuapp.com/manager`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          managerData: data
        }, () => {
          console.log('callback from App getting manager: ' + this.state.managerData)
        })
      })
      .catch(error => this.setState({ error }))
  }
  

  render() {
  
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
            <Switch>
              <Route exact path='/'>
                <Home rosterData={this.state.rosterData}/>
              </Route>

              <Route path='/roster'>
                <Roster 
                  clickMe={this.changeUser}
                  managerData={this.state.managerData} />
              </Route>

              <Route path='/podcast'>
                <Podcast />
              </Route>

              <Route path='/about'>
                <About />
              </Route>

              <Route path='/:handle'>
                <Profile 
                  userId={this.state.user}
                  managerData={this.state.managerData}
                  rosterData={this.state.rosterData} />
              </Route>
            </Switch>
        </main>
      </div>
    );
  }
}

export default App;
