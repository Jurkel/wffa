import React from 'react'
import './Stats.css'

function Stats() {
  return (
    <div>
      <h2 className='player-title'>Stats</h2>
      <div className='stats-text'>
        <div classNames='wins-losses'>
          <div className='stats-wins'>
            <h4>Wins</h4>
            <h3>3</h3>
          </div>
          <div className='stats-losses'>
            <h4>Losses</h4>
            <h3>1</h3>
          </div>
        </div>
        <div className='waiver-budget'>
          <h4>Waiver Budget Used: </h4><h3>$45</h3>
        </div>
        <div className='total-aquisition'>
          <h4>Total Aquisitions: </h4><h3>5</h3>
        </div>
        <div className='points-scored'>
          <h4>Points Scored</h4>
          <h3>458.25</h3>
        </div>
        <div className='points-against'>
          <h4>Points Against</h4>
          <h3>549.3</h3>
        </div>
      </div>
    </div>
  )
}

export default Stats;