import React, { Component } from "react";
import PropTypes from "prop-types";

const Context = React.createContext();

class PeopleContextProvider extends Component {
  state = {
    people: [],
    homeworld: {}
  };

  componentDidMount() {
    this.fetchPeople()
  }

  getHomeWorldForUser = url => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          homeworld: res
        });
      });
  }; // eslint-disable-line no-unused-vars

  timer = null;
  filterPeopleByName = name => {
    //they're performing a new search, empty out the homeworld panel
    this.setState({ homeworld: {} });
    name = name.trim();
    if (name.length === 0) {
      //if they clear out the search box, empty the results
      this.setState({ people: [] });
    } else {
      //use a timer so we don't make unnecessary api requests (reset the 0.5 second timeout onchange)
      clearTimeout(this.timer);
      this.timer = setTimeout(this.searchPeople, 500, name);
    }
  }; // eslint-disable-line no-unused-vars

  fetchPeople = name => {
    fetch(`https://swapi.co/api/people`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          people: res.results
        });
      });
  };

  searchPeople = name => {
    fetch(`https://swapi.co/api/people?search=${name}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          people: res.results
        });
      });
  };

  render() {
    const { children } = this.props;
    return (
      <Context.Provider
        value={{
          ...this.state,
          filterPeopleByName: this.filterPeopleByName,
          getHomeWorldForUser: this.getHomeWorldForUser
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}
PeopleContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default { Provider: PeopleContextProvider, Consumer: Context.Consumer };
