import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Podcast from '../Podcast/Podcast'
import Roster from '../Roster/Roster'
import About from '../About/About'
import Profile from '../Profile/Profile'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
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
        </Switch>
      </main>
    </div>
  );
}

export default App;
