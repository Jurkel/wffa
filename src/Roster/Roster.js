import React from 'react'
import player from '../images/player.png'
import Bio from '../Bio/Bio'
import Stats from '../Stats/Stats'
import Starters from '../Starters/Starters'
import './Roster.css'

function Roster() {
  return (
    <div className='roster-profile'>
      <div className='player-wrapper'>
        <img className='player-image' src={player} alt='dynamic player name' />
      </div>
      <div className='player-info'>
        <Bio />
        <Stats />
        <Starters />
      </div>
    </div>
  )
}

export default Roster;