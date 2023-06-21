import React from 'react';
import watch1 from './images/watch1.jpg';
import ProductInList from './ProductInList';
const Table = () => {
  const data = [
    { image: watch1, name: 'Product 1', price: '$9.99' },
    { image: 'image2.jpg', name: 'Product 2', price: '$14.99' },
    { image: 'image3.jpg', name: 'Product 3', price: '$19.99' },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
            <ProductInList
            imageUrl = {item.image}
            description = {item.name}
            price = {item.price}
            index = {index}
            redirectTo ="/Example"
             />
        ))}
      </tbody>
    </table>
  );
};

export default Table;