import PropTypes from 'prop-types';
import {
  Search,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => (
  <Search>
    <SearchForm onSubmit={onSubmit}>
      <SearchFormButton type="submit">
        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
      </SearchFormButton>

      <SearchFormInput
        name="inputForSearch"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </SearchForm>
  </Search>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
