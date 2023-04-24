import React, { useState } from "react";

function RecipeForm({ onAddRecipe }) {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [originalURL, setOriginalURL] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addName = (event) => {
    setName(event.target.value);
  };

  const addImage = (event) => {
    setImageURL(event.target.value);
  };

  const addIngredients = (event, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index][event.target.name] = event.target.value;
    setIngredients(newIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { quantity: "", name: "", type: "" }]);
  };

  const addSteps = (event, index) => {
    const newSteps = [...steps];
    newSteps[index] = event.target.value;
    setSteps(newSteps);
  };

  const handleAddStep = () => {
    setSteps([...steps, ""]);
  };

  const handleOriginalURLChange = (event) => {
    setOriginalURL(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (/\d/.test(name)) {
      setErrorMessage("Recipe name cannot contain a number");
      return;
    }

    const newRecipe = {
      name,
      ingredients,
      steps,
      imageURL,
      originalURL,
    };
    onAddRecipe(newRecipe);
    setName("");
    setImageURL("");
    setIngredients([]);
    setSteps([]);
    setOriginalURL("");
    setErrorMessage("");
  };

  const validate = (item) => {};

  return (
    <div className="mb-6 m-8 ... px-8 flex flex-col space-y-4 bg-cyan-400 w-1/2 ">
      <p className="font-bold text-4xl">Add your Recipe Below</p>
      <form
        onSubmit={handleSubmit}
        className=" justify-center items-center space-y-12 bg-cyan-400 w-1/2"
      >
        {errorMessage && <p>{errorMessage}</p>}
        <label className="block mb text-xl font-medium text-gray-900 dark:text-white">
          Name:
          <input type="text" value={name} onChange={addName} required />
        </label>

        <div>
          <p className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
            Ingredients:
          </p>
          {ingredients.map((ingredient, index) => (
            <div key={index}>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Quantity:
                <input
                  type="text"
                  name="quantity"
                  value={ingredient.quantity}
                  onChange={(event) => addIngredients(event, index)}
                  required
                />
              </label>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name:
                <input
                  type="text"
                  name="name"
                  value={ingredient.name}
                  onChange={(event) => addIngredients(event, index)}
                  required
                />
              </label>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Type:
                <input
                  type="text"
                  name="type"
                  value={ingredient.type}
                  onChange={(event) => addIngredients(event, index)}
                  required
                />
              </label>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddIngredient}
            className="text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Ingredient
          </button>
        </div>
        <div>
          <h3 className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
            Steps:
          </h3>
          {steps.map((step, index) => (
            <div key={index}>
              <label>
                Step {index + 1}:
                <textarea
                  value={step}
                  onChange={(event) => addSteps(event, index)}
                  required
                />
              </label>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddStep}
            className="text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Step
          </button>
        </div>
        <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
          Image URL:
          <input type="text" value={imageURL} onChange={addImage} required />
        </label>
        <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
          Original URL:
          <input
            type="text"
            value={originalURL}
            onChange={handleOriginalURLChange}
            required
          />
        </label>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
export default RecipeForm;
