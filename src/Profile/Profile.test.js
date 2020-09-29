import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import Profile from './Profile';
import { act } from "react-dom/test-utils";


let laila = [
  {
      "owner_id": "594996794933477376",
      "league_id": "590186196781543424",
      "firstname": "Laila",
      "lastname": "Fitriana",
      "height": "5'3",
      "weight": 123,
      "school": "OSU",
      "favoriteteam": "Ohio State University",
      "favoriteplayer": "Zeke Elliot",
      "experience": "1st year",
      "display_name": "lailapfit",
      "photolink": "../images/Laila.png",
      "active": true,
      "dob": "04-25-1990"
  }
]

let lailaRoster = [{
"taxi": null,
"starters": [
    "4017",
    "6806",
    "4098",
    "2216",
    "5927",
    "5001",
    "1426",
    "6770"
],
"settings": {
    "wins": 1,
    "waiver_position": 10,
    "waiver_budget_used": 45,
    "total_moves": 0,
    "ties": 0,
    "ppts_decimal": 58,
    "ppts": 231,
    "losses": 1,
    "fpts_decimal": 78,
    "fpts_against_decimal": 78,
    "fpts_against": 230,
    "fpts": 214
},
"roster_id": 5,
"reserve": null,
"players": [
    "1408",
    "1426",
    "2216",
    "344",
    "4017",
    "4098",
    "5001",
    "515",
    "5927",
    "6156",
    "642",
    "6770",
    "6794",
    "6806"
],
"player_map": null,
"owner_id": "594996794933477376",
"metadata": {
    "record": "LW"
},
"league_id": "590186196781543424",
"co_owners": null
}];

describe('profile without rendering', () => {
  let container, component;


  beforeEach(() => {
    console.log('before here')
    container = document.createElement("div");
    document.body.appendChild(container);
    // ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, container);
  });

  afterEach(() => {
    // cleanup on exiting
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders without crashing', () => {
    // component.setState({managerBio: laila, rosterStats:lailaRoster}, () => {
    //   console.log('Profile: ' + component.state.managerBio);
    // });
    component = ReactDOM.render(<BrowserRouter><Link to={{
      pathname: '/laila',
      state: {
        managerBio: laila,
        rosterStats: lailaRoster
      }
    }}/></BrowserRouter>, container);
    let k = {
      state: {
        managerBio: laila[0],
        rosterStats: lailaRoster[0]
      }
    }
    act(() => {
      console.log('inside act' + JSON.stringify(k.state))
      ReactDOM.render(<BrowserRouter><Profile location={k} userId={laila[0].owner_id} starters={lailaRoster[0].starters} rosterData={lailaRoster} managerData={laila}/></BrowserRouter>, container);
    })   
  })
})