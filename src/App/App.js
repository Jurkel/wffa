import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Podcast from '../Podcast/Podcast';
import Roster from '../Roster/Roster';
import About from '../About/About';
import Profile from '../Profile/Profile';
import './App.css';
import {API_ROSTER} from '../config';
import {API_MANAGERS} from '../config';
import {API_STARTERS} from '../config';

class App extends Component {
    state = {
      user: '',
      rosterData: [],
      managerData: [],
      currentUser: {},
      starters: []
    };

  // changes state from separate component
  changeUser = (id) => {
    this.setState({ user: id }, () => {
      this.updateStarters(id);
    })
  };

  // formats the starting players list to array format
  updateStarters = (id) => {
    let roster = this.state.rosterData.find(playerId => {
      return playerId.owner_id === id;
    });
    let param = roster.starters.toString().replace(/,/g, "-");
    fetch(`${API_STARTERS}` + param)
    .then(res => res.json())
    .then((starters) => {
      if(starters) {
        this.setState ({ starters });
      }
    })
    .catch(error => this.setState({ error }));
  };

  // fetches main player/manager data
  componentDidMount() {
    fetch(`${API_ROSTER}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ rosterData: data })
      })
      .catch(error => this.setState({ error }));

    fetch(`${API_MANAGERS}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ managerData: data });
      })
      .catch(error => this.setState({ error }));
  };
  

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
                  managerData={this.state.managerData}
                  rosterData={this.state.rosterData} />
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
                  starters={this.state.starters}
                  rosterData={this.state.rosterData} />
              </Route>
            </Switch>
        </main>
      </div>
    );
  }
};

export default App;
