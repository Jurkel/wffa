import React from 'react';
import ReactDOM from 'react-dom';
import Podcast from './Podcast';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Podcast />, div);
  ReactDOM.unmountComponentAtNode(div);
});