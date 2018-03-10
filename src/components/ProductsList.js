import React from 'react';

const ProductsList = props => {
  // console.log(props.filter);
  return (
    <tbody>
      {props.filter === 'All'
        ? props.products.map((entry, i) => {
            return (
              <tr className="scale-transition scale-in" key={i + 1}>
                <td>{entry.advertiser_name}</td>
                <td>{entry.product_name}</td>
                <td>{entry.product_sku}</td>
              </tr>
            );
          })
        : props.products
            .filter(product => {
              return product.advertiser_name === props.filter;
            })
            .map((entry, i) => {
              return (
                <tr className="scale-transition scale-in" key={i + 1}>
                  <td>{entry.advertiser_name}</td>
                  <td>{entry.product_name}</td>
                  <td>{entry.product_sku}</td>
                </tr>
              );
            })}
    </tbody>
  );
};

export default ProductsList;
