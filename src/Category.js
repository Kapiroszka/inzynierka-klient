import React from 'react';

const Category = ({ id, name, children }) => {
  return (
    <div>
      <h3>{name}</h3>
      <ul>
        {children.map((child) => (
          <li key={child.id}>{child.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Category;