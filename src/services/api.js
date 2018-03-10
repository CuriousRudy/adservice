const API_ROOT = 'http://localhost:3000/api/v1';

const getProducts = () => {
  return fetch(`${API_ROOT}/products`).then(res => res.json());
};

const loadMore = index => {
  return fetch(`${API_ROOT}/more`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      current_index: index
    }
  }).then(res => res.json());
};

export default {
  products: {
    getProducts,
    loadMore
  }
};
