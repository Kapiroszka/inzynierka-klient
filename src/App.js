import React, { useEffect, useState } from 'react';
import watch1 from './images/watch1.jpg';
import ProductInList from './ProductInList';
import {HttpService } from './HttpService';
import Product from './Product';

const Table = () => {

    const [productList, setProductList] = useState([]);

//  useEffect(() => {
//        const fetchData = async () => {
//            HttpService.get('localhost:8080/api/product/1').then((response) => {
//                if (response.status === 200) {
//                    setProductList(response.data.map(d => new ProductInList(watch1,d.description,d.salePrice,1)));
//                }
//                }
//            )
//        };
//    fetchData();
//    }
//    , []);

     useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8080/api/product/1');
            if (response.ok) {
              const jsonData = await response.json();
               setProductList(jsonData.map(d => new Product(d.image,d.name,d.salePrice,1)));
            } else {
              console.error('Error:', response.statusText);
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };

        fetchData();
      }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Imag1e</th>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productList.map((item, index) => (
            <ProductInList
           product = {item}
            index = {index}
            redirectTo ="/Example"
             />
        ))}
      </tbody>
    </table>
  );
};

export default Table;