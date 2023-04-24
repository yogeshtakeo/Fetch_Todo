import { useEffect } from "react";
import { Alert } from "flowbite-react";
import recipeData from "./recipe.json";
import { useState } from "react";
import SidebarComponent from "./sidebar";
import CardComponent from "./Card";
import NavbarComponent from "./Navbar";

function App() {
  const [recipes, setRecipes] = useState([...recipeData]);
  return (
    <>
      {""}
      <NavbarComponent />
      <div className="flex">
        <SidebarComponent />
        <div className="Flex m-4 flex-wrap gap-12">
          {recipes.map((recipe, index) => (
            <CardComponent key={index} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
