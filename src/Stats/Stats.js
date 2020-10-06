import React from 'react';
import './Stats.css';

function Stats(props) {
  return (
    <div className='stats-wrapper'>
      <h2 className='player-title'>Stats</h2>
      <div className='stats-text'>
        <div className='wins-losses'>
          <div className='stats-wins'>
            <h4>Wins</h4>
            <h3>{props.rosterData.settings.wins}</h3>
          </div>
          <div className='stats-losses'>
            <h4>Losses</h4>
            <h3>{props.rosterData.settings.losses}</h3>
          </div>
        </div>
        <div className='waiver-budget stats-flex-row'>
          <h4>Waiver Budget Used: </h4><h3>${props.rosterData.settings.waiver_budget_used}</h3>
        </div>
        <br />
        <div className='total-aquisition stats-flex-row'>
          <h4>Waiver Position: </h4><h3>{props.rosterData.settings.waiver_position}</h3>
        </div>
        <div className='points-scored'>
          <h4>Points Scored</h4>
          <h3>{props.rosterData.settings.fpts}.{props.rosterData.settings.fpts_decimal}</h3>
        </div>
        <div className='points-against'>
          <h4>Points Against</h4>
          <h3>{props.rosterData.settings.fpts_against}.{props.rosterData.settings.fpts_against_decimal}</h3>
        </div>
      </div>
    </div>
  );
};

export default Stats;