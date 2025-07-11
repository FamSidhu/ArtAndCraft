import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Dummy search logic
    if (query.trim() !== "") {
      setResults([
        `Result for "${query}" #1`,
        `Result for "${query}" #2`,
        `Result for "${query}" #3`,
      ]);
    } else {
      setResults([]);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Search Page</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Type to search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "0.5rem", width: "250px" }}
        />
        <button type="submit" style={{ marginLeft: "1rem", padding: "0.5rem" }}>
          Search
        </button>
      </form>
      <ul>
        {results.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
