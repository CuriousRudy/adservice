import React from 'react';
import ReactDOM from 'react-dom';
import shallow from 'enzyme';
import App from './App';

test('renders without crashing', () => {
  const component = shallow(<App />);
  console.log(component);
});
