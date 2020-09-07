import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import logo from '../images/Logo.png'
import './Nav.css'

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className='nav-bar'>
          <img className='logo-image' alt='wffa-logo' src={logo} />
          <Menu 
            noOverlay
            right>
            <a id='home' className='menu-item' href='/'>Home</a>
            <a id='roster' className='menu-item' href='/roster'>Roster</a>
            <a id='profile' className='menu-item' href='/profile'>Profile</a>
            <a id='podcast' className='menu-item' href='/podcast'>Podcast</a>
            <a id='about' className='menu-item' href='/about'>About</a>
          </Menu>
        </nav>
      </div>
    )
  }
  
}

export default Nav;