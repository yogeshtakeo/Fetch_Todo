import React, { useState } from "react";
import Data from "./data.json";
import RecipeForm from "./recipeForm";

function RecipeDetails() {
  const [recipes, setRecipes] = useState(Data);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div>
      <p className="text-4xl text-blue-500">
        Follow the instructions below for delicious meals:
      </p>
      <br></br>
      <ul className="list-disc">
        {recipes.map((recipe) => (
          <div className="recipe-box" key={recipe.id}>
            <p className="bg-red-600 text-white w-auto text-3xl">
              {recipe.name}
            </p>
            <br></br>

            <p className="text-2xl underline ">Ingredients:</p>
            <ul className="list-disc list-inside">
              {recipe.ingredients.map((ingredient, index) => (
                <>
                  <li className="text-xl" key={index}>
                    {ingredient.quantity} {ingredient.name} {ingredient.type}
                  </li>
                </>
              ))}
            </ul>
            <br></br>
            <p className="text-2xl underline"> Steps</p>
            <ol className="list-decimal list-inside">
              {recipe.steps.map((step, index) => (
                <>
                  <li className="text-xl" key={index}>
                    {step}
                  </li>
                </>
              ))}
            </ol>
            <br></br>
            <img
              src={recipe.imageURL}
              alt={recipe.name}
              className="h-auto w-1/2 rounded-lg"
            ></img>

            <a
              href={recipe.originalURL}
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 text-xl"
            >
              Click to learn more about this recipe
            </a>
            <br></br>
            <br></br>
          </div>
        ))}
      </ul>

      <RecipeForm onAddRecipe={handleAddRecipe} />
    </div>
  );
}

export default RecipeDetails;
