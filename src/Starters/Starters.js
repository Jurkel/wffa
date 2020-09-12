import React from 'react'
import './Starters.css'

function Starters() {
  return (
    <div className='starters-wrapper'>
      <h2 className='player-title'>Starters</h2>
      <div className='starter-list'>
        <div className='starter-flex'>
          <h4>QB: </h4><h3>Starter 1</h3>
        </div>
        <div className='starter-flex'>
          <h4>RB: </h4><h3>Starter 2</h3>
        </div>
        <div className='starter-flex'>
          <h4>RB: </h4><h3>Starter 3</h3>
        </div>
        <div className='starter-flex'>
          <h4>WR: </h4><h3>Starter 4</h3>
        </div>
        <div className='starter-flex'>
          <h4>WR: </h4><h3>Starter 5</h3>
        </div>
        <div className='starter-flex'>
          <h4>TE: </h4><h3>Starter 6</h3>
        </div>
        <div className='starter-flex'>
          <h4>FLEX: </h4><h3>Starter 7</h3>
        </div>
        <div className='starter-flex'>
          <h4>SFLEX: </h4><h3>Starter 8</h3>
        </div>
      </div>
    </div>
  )
}

export default Starters;