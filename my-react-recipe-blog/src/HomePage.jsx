import React from 'react';
const HomePage = ({ recipes }) => {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>Category: {recipe.category}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

