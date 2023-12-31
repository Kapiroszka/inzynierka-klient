import React, { useEffect, useState } from 'react';
import watch1 from './images/watch1.jpg';
import ProductInList from './ProductInList';
import {HttpService } from './HttpService';
import Product from './Product';
import CategoryTreeNode from './CategoryTreeNode';
import CategoryTree from './CategoryTree';

const Table = () => {

    const [rootCategory, setRootCategory] = useState([]);

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
  function mapJsonToTreeNode(json) {
      const id = json.id;
      const name = json.name;
      const parentId = json.parentId;
      const children = json.children.map(childJson => mapJsonToTreeNode(childJson));

      return new CategoryTreeNode(id, name, parentId, children);
    }
     useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8080/api/category/');
            if (response.ok) {
              const jsonData = await response.json();
               setRootCategory(mapJsonToTreeNode(jsonData));
               console.log(jsonData)
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
 <div>
      <h1>Category Tree Example</h1>
      <CategoryTree category={rootCategory} />
    </div>
  );
};

export default Table;