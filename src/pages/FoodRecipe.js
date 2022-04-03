import React, { useState } from 'react';
import './FoodRecipe.css';
import './Responsive.css'
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
import Receipe from '../component/Receipe';
import Alert from '../component/Alert';

const FoodRecipe = () => {

    const [query, setQuery] = useState("");
    const [receipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
  
    const APP_ID = "951610a9";
  
    const APP_KEY = "3fab29b205fae97ccd7786fe00058ff7";
  
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  
    const getData = async () => {
      if (query !== "") {
        const result = await axios.get(url)
        setRecipes(result.data.hits);
        console.log(result);
        setQuery("")
      } else {
        setAlert("Please fill this")
      }
  
    }
  
    const onChange = e => setQuery(e.target.value);
  
    const onSubmit = (e) => {
      e.preventDefault();
      getData();
    }
  
  return (
    <div className="App">
    <h1 className='food-Search-Heading'>Food serach app</h1>
    <form onSubmit={onSubmit} className="search-form">
      {alert !== "" && <Alert alert={alert} />}
      <input
        type="text"
        name="query"
        onChange={onChange}
        value={query}
        autoComplete="off"
        placeholder="Search Food"
      />
      <input type="submit" value="Search" />
    </form>

    <div className='recipes'>
      {
        receipes !==  []  &&
        receipes.map(receipe =>
          <Receipe key={uuidv4()} receipe={receipe} />
        )}
    </div>
  </div>
  )
}

export default FoodRecipe
