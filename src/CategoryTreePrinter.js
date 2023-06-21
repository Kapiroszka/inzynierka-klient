import React from 'react';
import CategoryTree from './CategoryTree';

const App = () => {
  const rootCategory = {
    id: 1,
    name: 'Electronics',
    children: [
      {
        id: 2,
        name: 'Laptops',
        children: [
          { id: 5, name: 'Gaming Laptops' },
          { id: 6, name: 'Ultrabooks' },
        ],
      },
      { id: 3, name: 'Smartphones' },
      { id: 4, name: 'Tablets' },
    ],
  };

  return (
    <div>
      <h1>Category Tree Example</h1>
      <CategoryTree category={rootCategory} />
    </div>
  );
};

export default App;
