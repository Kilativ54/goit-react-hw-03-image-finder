import React from "react";

import {Search, SearchForm, SearchFormButtonLabel, SearchFormButton, SearchFormInput} from "./Searchbar.styled"



export default class Searchbar extends React.Component {
    state = {
        searchQuery: "",
      };
      handleInput = async (e) => {
        await this.setState({ searchQuery: e.target.value });
    
        this.props.onChange(e.target.value);
      };
      render() {
        return (
            <Search >
            <SearchForm >
              <SearchFormButton type="submit" >
                <SearchFormButtonLabel >Search</SearchFormButtonLabel>
              </SearchFormButton>
          
              <SearchFormInput
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
                onChange={this.handleInput}
              />
            </SearchForm>
          </Search>
        );
      }        
}