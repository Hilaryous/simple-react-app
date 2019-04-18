import React, { Component } from "react";
import PropTypes from "prop-types";

const Context = React.createContext();

class PeopleContextProvider extends Component {
  state = {
    homeworldUrl: ''
  };

  setHomeWorldForUser = url => {
    var parser = document.createElement('a');
    parser.href = url
    this.setState({ homeworldUrl: parser.pathname });
  };

  render() {
    const { children } = this.props;
    return (
      <Context.Provider
        value={{
          ...this.state,
          setHomeWorldForUser: this.setHomeWorldForUser
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
