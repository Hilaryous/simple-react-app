import React from "react";
import PeopleContext from "../context";

const SearchBar = ({ filterPeopleByName }) => (
  <div className="search-bar">
    <input
      onChange={e => filterPeopleByName(e.target.value)}
      type="text"
      className="input"
      placeholder="Search for a person..."
    />
  </div>
);

export default () => (
  <PeopleContext.Consumer>
    {({ filterPeopleByName }) => (
      <SearchBar filterPeopleByName={filterPeopleByName} />
    )}
  </PeopleContext.Consumer>
);
