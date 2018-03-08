import React from 'react';
import api from '../services/api';

export default class ProductsContainer extends React.Component {
  state = {
    loading: true
  };

  componentDidMount = () => {
    console.log('hello');
    api.products.getProducts().then(data => console.log(data));
  };

  render() {
    console.log('hello world');
    return (
      <div>
        <h5>this is going to be the thing</h5>
        <button className="btn-flat">hey there</button>
      </div>
    );
  }
}
