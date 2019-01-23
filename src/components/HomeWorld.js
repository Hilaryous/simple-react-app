import React from "react";
import PropTypes from "prop-types";
import PeopleContext from "../context";

const HomeWorld = ({ homeworld }) => (
  <div className="homeworld">
    <div className="title">Home World Details</div>
    {homeworld.name && <div className="text">{`Name: ${homeworld.name}`}</div>}
    {homeworld.climate && (
      <div className="text">{`Climate: ${homeworld.climate}`}</div>
    )}
    {homeworld.gravity && (
      <div className="text">{`Gravity: ${homeworld.gravity}`}</div>
    )}
  </div>
);

HomeWorld.propTypes = {
  homeworld: PropTypes.shape({
    name: PropTypes.string,
    climate: PropTypes.string,
    gravity: PropTypes.string
  }).isRequired
};

export default () => (
  <PeopleContext.Consumer>
    {({ homeworld }) => <HomeWorld homeworld={homeworld} />}
  </PeopleContext.Consumer>
);
