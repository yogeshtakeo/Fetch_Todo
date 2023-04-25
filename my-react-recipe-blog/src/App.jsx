import { useState } from 'react'
import Homepage from './HomePage'
import Detail from './RecipeDetailPage'
import Form from './RecipeForm.jsx'
import List from './RecipeList.jsx'
import Recipe from './recipes.json'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Homepage recipes={Recipe.recipes} />
      {console.log("hello")}

      {Recipe.recipes.map((recipe,index)=>{
        return <Detail key={index} recipe={recipe}/>
      })}
      </div>
    </>
  )
}

export default App
