import React, { useState } from "react";

function RecipeForm({ onSave, onCancel, recipe }) {
  const [title, setTitle] = useState(recipe.title || "");
  const [category, setCategory] = useState(recipe.category || "");
  const [ingredients, setIngredients] = useState(recipe.ingredients || []);
  const [instructions, setInstructions] = useState(recipe.instructions || []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleIngredientsChange = (event) => {
    setIngredients(event.target.value.split("\n"));
  };

  const handleInstructionsChange = (event) => {
    setInstructions(event.target.value.split("\n"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ title, category, ingredients, instructions });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={handleCategoryChange}
        />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          value={ingredients.join("\n")}
          onChange={handleIngredientsChange}
        />
      </div>
      <div>
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          value={instructions.join("\n")}
          onChange={handleInstructionsChange}
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default RecipeForm;