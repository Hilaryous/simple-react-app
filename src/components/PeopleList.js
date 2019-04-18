import React from "react";
import { Query } from "react-apollo";
import FETCH_PEOPLE from '../queries/getPeople'
import PropTypes from "prop-types";
import Person from "./Person";
import PeopleContext from "../context";

const PeopleList = ({ setHomeWorldForUser }) => (
  <Query query={FETCH_PEOPLE}>
    {({ data }) => (
      <div className="people-list">
        {data && data.people && data.people.results && data.people.results.map(({name, height, mass, gender, homeworld}) => (
          <Person
            {...{
              name,
              height,
              mass,
              gender,
              homeworld,
            }}
            key={name}
            setHomeWorldForUser={setHomeWorldForUser}
          />
        ))}
          </div>
    )}
  </Query>
);

PeopleList.propTypes = {
  setHomeWorldForUser: PropTypes.func
};

export default () => (
  <PeopleContext.Consumer>
    {({ setHomeWorldForUser }) => (
      <PeopleList setHomeWorldForUser={setHomeWorldForUser} />
    )}
  </PeopleContext.Consumer>
);
