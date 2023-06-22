import React from 'react';
import Product from './Product';


const ProductInList = ({ product,index }) => {

  const handleClick = () => {
   alert("Hello! I am an alert box!!");
  };



  return (
      <tr key={index}>
             <td> <img src={product.imageUrl} alt="Image" style={{ width: '100px', height: '100px' }} onClick={handleClick}/></td>
      <td>{product.description}</td>
      <td>{product.salePrice}</td>
    </tr>
  );
};

export default ProductInList;