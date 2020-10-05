import React from 'react';
import './Bio.css';

function Bio(props) {
  return (
    <div className='bio-wrapper'>
      <h2 className='player-title'>Bio</h2>
      <div className='bio-small-stats'>
        <div className='bio-horizontal'>
          <div className='bio-height'>
            <h4>Height</h4>
            <h3>{props.managerData.height}</h3>  
          </div>
          <div className='bio-weight'>
            <h4>Weight</h4>
            <h3>{props.managerData.weight} lbs</h3>
          </div>
          <div className='bio-dob'>
            <h4>DOB</h4>
            <h3>{props.managerData.dob}</h3>
          </div> 
        </div>
        <div className='bio-school'>
          <h4>School</h4>
          <h3>{props.managerData.school}</h3>
        </div>
        <div className='bio-experience'>
          <h4>Experience</h4>
          <h3>{props.managerData.experience}</h3>
        </div>
        <div className='bio-fav-team'>
          <h4>Favorite Team</h4>
          <h3>{props.managerData.favoriteteam}</h3>
        </div>
        <div className='bio-fav-player'>
          <h4>Favorite Player</h4>
          <h3>{props.managerData.favoriteplayer}</h3>
        </div>
      </div>
    </div>
  )
}

export default Bio;