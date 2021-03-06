import React from 'react';
import ProductsList from '../components/ProductsList';
import api from '../services/api';

export default class ProductsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      filter: 'All',
      current_index: 0,
      products: []
    };
  }

  componentDidMount() {
    api.products.getProducts().then(
      data =>
        this.setState({
          products: [...data.products[0]],
          current_index: data.current_index
        }),

      this.setState({ loading: false })
    );
  }

  updateFilter(e) {
    // console.log(e.target.name);
    this.setState({
      filter: e.target.name
    });
  }

  loadMoreResults(e) {
    api.products.loadMore(this.state.current_index).then(data =>
      this.setState({
        current_index: data.current_index,
        products: [...this.state.products, ...data.products[0]]
      })
    );
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <div>
          <ul
            value={this.state.filter}
            id="dropdown1"
            className="dropdown-content"
          >
            <li>
              <a onClick={e => this.updateFilter(e)} name="All">
                Show All
              </a>
            </li>
            <li>
              <a onClick={e => this.updateFilter(e)} name="Acer">
                Acer
              </a>
            </li>
            <li>
              <a onClick={e => this.updateFilter(e)} name="Apple">
                Apple
              </a>
            </li>
            <li>
              <a onClick={e => this.updateFilter(e)} name="Best Buy">
                Best Buy
              </a>
            </li>
            <li>
              <a onClick={e => this.updateFilter(e)} name="Coca Cola">
                Coca Cola
              </a>
            </li>
            <li>
              <a onClick={e => this.updateFilter(e)} name="Lenovo">
                Lenovo
              </a>
            </li>
            <li>
              <a onClick={e => this.updateFilter(e)} name="Logitech">
                Logitech
              </a>
            </li>
            <li>
              <a onClick={e => this.updateFilter(e)} name="Staples">
                Staples
              </a>
            </li>
            <li>
              <a onClick={e => this.updateFilter(e)} name="Motorola">
                Motorola
              </a>
            </li>
            <li>
              <a onClick={e => this.updateFilter(e)} name="Nike">
                Nike
              </a>
            </li>
            <li>
              <a onClick={e => this.updateFilter(e)} name="Holmes">
                Holmes
              </a>
            </li>
          </ul>
          <div className="navbar-fixed blue-grey lighten-2">
            <nav>
              <div className="nav-wrapper">
                <a className="brand-logo center">Rakuten</a>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <a href="/">Master List</a>
                  </li>
                  {/* <!-- Dropdown Trigger --> */}
                  <li>
                    <a
                      className="dropdown-button"
                      href="#!"
                      data-activates="dropdown1"
                    >
                      {this.state.filter}
                      <i className="material-icons right">arrow_drop_down</i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {this.state.products.length < 1 ? (
          <div>
            <h5 className="center-align">
              Compiling a list of products...this might take a few seconds...
            </h5>
            <h5 className="center-align">Showing 1000 results at a time:</h5>
            <div class="progress">
              <div class="indeterminate" />
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col l12 s12">
              <table className="centered striped scale-transition scale-in">
                <thead>
                  <tr>
                    <th>Advertiser</th>
                    <th>Product Name</th>
                    <th>Product SKU</th>
                  </tr>
                </thead>

                <ProductsList
                  filter={this.state.filter}
                  products={this.state.products}
                />
              </table>
            </div>
          </div>
        )}

        <button
          onClick={() => this.loadMoreResults()}
          style={{ width: '100%' }}
          className="btn centered waves-effect waves-light"
        >
          Show More
        </button>
      </div>
    );
  }
}
