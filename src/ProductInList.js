import React from 'react';


const ProductInList = ({ imageUrl, description, price,index, redirectTo }) => {

  const handleClick = () => {
   alert("Hello! I am an alert box!!");
  };

  return (
      <tr key={index}>
             <td> <img src={imageUrl} alt="Image" style={{ width: '100px', height: '100px' }} onClick={handleClick}/></td>
      <td>{description}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductInList;