import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("pizza");
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
