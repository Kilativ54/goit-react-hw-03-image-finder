import React, { Component } from 'react';

import Searchbar from "./Searchbar/Searchbar";
import { Container } from "./App.styled";


export default class App extends Component {
  state = {
    searchQuery: "",
  };

  // handleChangeSearchQuery = debounce((searchQuery) => {
  //   this.setState({
  //     searchQuery,
  //   });
  // }, 1000);

  render() {
    return (
      <Container>
<Searchbar />
      </Container>
    );
  }
}

// https://pixabay.com/api/
// key (required)	str	Your API key: 38025875-c7d32510ab040b2a6f36bb46b
