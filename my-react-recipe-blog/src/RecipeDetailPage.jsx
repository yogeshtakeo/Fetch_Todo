import React from 'react';

const RecipeDetailPage = ({ recipe }) => {
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>Category: {recipe.category}</p>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetailPage;