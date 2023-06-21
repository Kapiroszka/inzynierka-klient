import React from 'react';

const CategoryTree = ({ category }) => {
  const renderCategory = (category) => {
    return (
      <div key={category.id}>
        <h3>{category.name}</h3>
        {category.children && category.children.length > 0 && (
          <ul>
            {category.children.map((child) => (
              <li key={child.id}>
                <CategoryTree category={child} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return renderCategory(category);
};

export default CategoryTree;
