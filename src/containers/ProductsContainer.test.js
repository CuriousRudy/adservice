import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import ProductsContainer from './ProductsContainer.js';

test('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<ProductsContainer />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('div');
});
