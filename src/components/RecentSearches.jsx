function RecentSearches({
  searches,
  onSelect,
  onClear,
}) {
  if (searches.length === 0) {
    return null;
  }

  return (
    <section className="recent-section">
      <div className="section-heading">
        <h2>Recent Searches</h2>

        <button onClick={onClear}>
          Clear History
        </button>
      </div>

      <div className="recent-list">
        {searches.map((city) => (
          <button
            key={city}
            className="recent-city"
            onClick={() => onSelect(city)}
          >
            📍 {city}
          </button>
        ))}
      </div>
    </section>
  );
}

export default RecentSearches;