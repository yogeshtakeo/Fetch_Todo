import React, { useState } from 'react';

const RecipeList = ({ recipesData }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredRecipes = recipesData.filter(
    (recipe) => selectedCategory === '' || recipe.category === selectedCategory
  );

  return (
    <div>
      <h2>Recipes</h2>
      <div>
        <label htmlFor="category">Filter by category:</label>
        <select id="category" name="category" onChange={handleCategorySelect}>
          <option value="">All</option>
          <option value="appetizers">Appetizers</option>
          <option value="entrees">Entrees</option>
          <option value="desserts">Desserts</option>
        </select>
      </div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>Category: {recipe.category}</p>
          <p>Ingredients: {recipe.ingredients}</p>
          <p>Instructions: {recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;