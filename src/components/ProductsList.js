import React from 'react';

const ProductsList = props => {
  console.log(props.filter);
  return (
    <tbody>
      {props.filter === 'All'
        ? props.products.map((entry, i) => {
            return (
              <tr key={i + 1}>
                <td>{entry.product_name}</td>
                <td>{entry.product_sku}</td>
                <td>{entry.advertiser_name}</td>
              </tr>
            );
          })
        : props.products
            .filter(product => {
              return product.advertiser_name === props.filter;
            })
            .map((entry, i) => {
              return (
                <tr key={i + 1}>
                  <td>{entry.product_name}</td>
                  <td>{entry.product_sku}</td>
                  <td>{entry.advertiser_name}</td>
                </tr>
              );
            })}
    </tbody>
  );
};

export default ProductsList;
