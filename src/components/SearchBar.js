import React from "react";

const SearchBar = () => (
  <div className="search-bar">
    <input
      onChange={e => e.target.value}
      type="text"
      className="input"
      placeholder="This does not work..."
    />
  </div>
)

export default SearchBar;
