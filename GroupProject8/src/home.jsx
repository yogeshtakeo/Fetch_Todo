import React, { useState } from "react";
import Data from "./data.json";

function RecipeList() {
  const [recipes, setRecipes] = useState(Data);

  return (
    <div>
      <p className="px-4 py-4 text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-white">
        SIMPLE RECIPES MADE FOR real, actual, everyday life
      </p>
      <p className="text-3xl underline text-red-600">List of Recipes: </p>
      <ol className="list-decimal list-inside">
        {recipes.map((recipe) => (
          <li key={recipe.name} className="text-xl">
            {recipe.name}{" "}
          </li>
        ))}
      </ol>
      <br></br>
    </div>
  );
}

export default RecipeList;
