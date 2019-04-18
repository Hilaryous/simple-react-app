import React from "react";
import PropTypes from "prop-types";

const Person = ({
  name, height, mass, gender, homeworld,
  setHomeWorldForUser
}) => (
  <div className="person">
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
    <button onClick={e => setHomeWorldForUser(homeworld)}>Homeworld</button>
  </div>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  mass: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  homeworld: PropTypes.string.isRequired
};

export default Person;
