import { useState } from "react";

function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) {
      return;
    }

    onSearch(city.trim());
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <div className="search-box">
        <span className="search-icon">🔍</span>

        <input
          type="text"
          placeholder="Search city... e.g. Kanpur, Delhi, Mumbai"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        {city && (
          <button
            type="button"
            className="clear-button"
            onClick={() => setCity("")}
          >
            ✕
          </button>
        )}
      </div>

      <button
        type="submit"
        className="search-button"
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}

export default SearchBar;