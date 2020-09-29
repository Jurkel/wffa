import React from 'react';
import ReactDOM from 'react-dom';
// import App from '../App/App';
import Bio from './Bio';
// import { shallow, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-15';

it('renders without crashing', () => {
  // const app = document.createElement('div');
  const div = document.createElement('div');
  // ReactDOM.render(
  //   <App />, app);
    ReactDOM.render(
      <Bio />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

// configure({ adapter: new Adapter() });

// describe('<Bio />', () => {
//   it('div contains matching element', () => {
//     const wrapper = shallow(
//       <div className='bio-height'>
//         <h4>Height</h4> 
//       </div>
//     );
//     expect(wrapper.find(
//       <div className='bio-height'>
//         <h4>Height</h4> 
//       </div>)).to.equal(true);
//   });
// });
