import {
  Header,
  SearchButton,
  SearchForm,
  SearchFormInput,
} from './Searchbar.styled';

import React from 'react';

export class Searchbar extends React.Component {
  state = {
    query: '',
    page: 1,
  };

  handleSearch = evt => {
    this.setState({ query: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    const { handleSearch, handleSubmit } = this;
    const { query } = this.state;

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
  }
}
