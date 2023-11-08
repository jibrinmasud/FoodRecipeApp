import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch?";
const API_KEY = "d0950b6136bb4652b63ffc451829a7ed";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  //useEffect Hooks
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      ></input>
    </div>
  );
}
