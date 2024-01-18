import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  SearchButton,
  SearchForm,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSearch = evt => {
    setQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(query);
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          onChange={handleSearch}
          autocomplete="off"
          autoFocus
          required
          value={query}
          placeholder="Search images and photos"
        />
        <SearchButton type="submit" className="button">
          Search
        </SearchButton>
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
