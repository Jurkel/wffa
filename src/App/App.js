import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Podcast from '../Podcast/Podcast'
import Roster from '../Roster/Roster'
import About from '../About/About'
import Profile from '../Profile/Profile'
import StatsContext from '../StatsContext'
import './App.css';

class App extends Component {
  state = {
    user: ''
  }
  render() {
    const contextValue = {
      user: this.state.user
    }
  
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <StatsContext.Provider value={contextValue}>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/roster'>
                <Roster />
              </Route>
              <Route path='/podcast'>
                <Podcast />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/profile'>
                <Profile />
              </Route>
              <Route path='/:handle'>
                <Profile />
              </Route>
            </Switch>
          </StatsContext.Provider>
        </main>
      </div>
    );
  }
}

export default App;
