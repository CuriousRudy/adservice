import React from 'react';
import ProductsList from '../components/ProductsList';
import api from '../services/api';

export default class ProductsContainer extends React.Component {
  state = {
    loading: true,
    filter: 'all',
    products: []
  };

  componentDidMount = () => {
    api.products
      .getProducts()
      .then(
        data => this.setState({ products: [...data] }),
        this.setState({ loading: false })
      );
  };

  // shouldComponentUpdate = nextProps => {
  //   return nextProps.products !== this.state.products;
  // };

  updateFilter = e => {
    console.log(e.target.name);
    this.setState({
      filter: e.target.value
    });
  };

  render() {
    return (
      <div>
        <div>
          <ul id="dropdown1" className="dropdown-content">
            <li>
              <a
                onClick={e => this.updateFilter(e)}
                name="Coca Cola"
                value="this.state.filter"
              >
                Coca Cola
              </a>
            </li>
            <li>
              <a onClick={e => this.updateFilter(e)} name="Logitech">
                Logitech
              </a>
            </li>

            <li>
              <a onClick={e => this.updateFilter(e)} name="Apple">
                Apple
              </a>
            </li>
            <li>
              <a onClick={e => this.updateFilter(e)} name="Acer">
                Acer
              </a>
            </li>
            <li>
              <a onClick={e => this.updateFilter(e)} name="Staples">
                Staples
              </a>
            </li>
            <li>
              <a onClick={e => this.updateFilter(e)} name="Best Buy">
                Best Buy
              </a>
            </li>
          </ul>
          <nav>
            <div className="nav-wrapper">
              <a className="brand-logo center">Rakuten</a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="sass.html">Master List</a>
                </li>
                {/* <!-- Dropdown Trigger --> */}
                <li>
                  <a
                    className="dropdown-button"
                    href="#!"
                    data-activates="dropdown1"
                  >
                    Advertisers<i className="material-icons right">
                      arrow_drop_down
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {this.state.loading ? (
          <div className="progress">
            <div className="indeterminate" />
          </div>
        ) : (
          <div className="container">
            <table className="highlight">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product SKU</th>
                  <th>Advertiser</th>
                </tr>
              </thead>

              <ProductsList
                filter={this.state.filter}
                products={this.state.products}
              />
            </table>
          </div>
        )}
      </div>
    );
  }
}
