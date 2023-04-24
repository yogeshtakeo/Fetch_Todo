import React, { useState, useEffect } from "react";
import RecipeList from "./home";
import RecipeDetails from "./recipeDetail";
import "./App.css";
import Navbar from "./navbar";
import Footer from "./footer";

function App() {
  return (
    <div>
      <Navbar />
      <RecipeList />
      <RecipeDetails />
      <Footer />
    </div>
  );
}
export default App;
