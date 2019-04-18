import React from "react";
import { Query } from "react-apollo";
import FETCH_HOMEWORLD from '../queries/getHomeWorldForUser'
import PropTypes from "prop-types";
import PeopleContext from "../context";

const HomeWorld = ({ url }) => (
  <Query query={FETCH_HOMEWORLD} variables={{ url }}>
    {({ data }) => {
      const homeworld = (data && data.homeworld) || {}
      return (
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
      ) }}
  </Query>
);

HomeWorld.propTypes = {
  url: PropTypes.string
};

export default () => (
  <PeopleContext.Consumer>
    {({ homeworldUrl }) => <HomeWorld url={homeworldUrl} />}
  </PeopleContext.Consumer>
);
