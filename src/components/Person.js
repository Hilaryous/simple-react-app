import React from "react";
import PropTypes from "prop-types";

const Person = ({
  name, height, mass, gender, homeworld,
  getHomeWorldForUser
}) => (
  <div className="person">
    { console.warn('I RENDERED') }
    <div className="title">{name}</div>
    <span className="text">
      {height}
      {isNaN(height) ? "" : "m"}
    </span>
    {" | "}
    <span className="text">
      {mass}
      {isNaN(mass) ? "" : "kg"}
    </span>
    {" | "}
    <span className="text">{gender}</span>
    <button onClick={e => getHomeWorldForUser(homeworld)}>Homeworld</button>
  </div>
);

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    homeworld: PropTypes.string.isRequired
  }).isRequired
};

export default Person;
