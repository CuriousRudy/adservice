import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App.js';

test('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('div');
});

// test('renders the state as loading', () => {
//   const renderer = new ShallowRenderer();
//   renderer.render(<App />);
//   const result = renderer.getRenderO
// });
