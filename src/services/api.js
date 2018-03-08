const API_ROOT = 'http://localhost:3000/api/v1/products';

const getProducts = () => {
  return fetch(`${API_ROOT}`).then(res => res.json());
};

export default {
  products: {
    getProducts
  }
};
