import React from 'react';

const ProductsList = props => {
  console.log(props.products);
  return (
    <tbody>
      {props.products.map((entry, i) => {
        return (
          <tr key={i + 1}>
            <td>{entry.product_name}</td>
            <td>{entry.product_sku}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default ProductsList;
