import React from "react";
import PropTypes from "prop-types";
import Person from "./Person";
import PeopleContext from "../context";

const PeopleList = ({ people, getHomeWorldForUser }) => (
  <div className="people-list">
    {people.map(({name, height, mass, gender, homeworld}) => (
      <Person
        {...{
          name,
          height,
          mass,
          gender,
          homeworld,
        }}
        key={name}
        getHomeWorldForUser={getHomeWorldForUser}
      />
    ))}
  </div>
);

PeopleList.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      height: PropTypes.string.isRequired,
      mass: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      homeworld: PropTypes.string.isRequired
    })
  ).isRequired
};

export default () => (
  <PeopleContext.Consumer>
    {({ people, getHomeWorldForUser }) => (
      <PeopleList people={people} getHomeWorldForUser={getHomeWorldForUser} />
    )}
  </PeopleContext.Consumer>
);
