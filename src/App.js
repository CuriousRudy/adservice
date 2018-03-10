import React, { Component } from 'react';
// import logo from './logo.svg';
import ProductsContainer from './containers/ProductsContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductsContainer />
      </div>
    );
  }
}

export default App;
