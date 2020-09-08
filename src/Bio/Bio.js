import React from 'react'
import './Bio.css'

function Bio() {
  return (
    <div className='bio-wrapper'>
      <h2 className='player-title'>Bio</h2>
      <div className='bio-small-stats'>
        <div className='bio-horizontal'>
          <div className='bio-height'>
            <h4>Height</h4>
            <h3>5'10"</h3>  
          </div>
          <div className='bio-weight'>
            <h4>Weight</h4>
            <h3>135 lbs</h3>
          </div>
          <div className='bio-dob'>
            <h4>DOB</h4>
            <h3>1-25-90</h3>
          </div> 
        </div>
        <div className='bio-school'>
          <h4>School</h4>
          <h3>The Ohio State University</h3>
        </div>
        <div className='bio-experience'>
          <h4>Experience</h4>
          <h3>3rd Season</h3>
        </div>
        <div className='bio-fav-team'>
          <h4>Favorite Team</h4>
          <h3>Cleveland Browns</h3>
        </div>
        <div className='bio-fav-player'>
          <h4>Favorite Player</h4>
          <h3>Lamar Jackson</h3>
        </div>
        <div className='bio-goals'>
          <h4>Goals</h4>
          <h3>Win the league</h3>
        </div>
      </div>
    </div>
  )
}

export default Bio;