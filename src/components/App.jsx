import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends React.Component {
  state = {
    query: '',
    images: [],
    page: 1,
    totalHits: 0,
    isLoading: false,
  };

  // state = {
  //   search: '',
  //   posts: [],
  //   loading: false,
  //   error: null,
  //   page: 1,
  //   modalOpen: false,
  //   postDetails: {},
  // };

  handleSubmit = query => {
    this.setState({ query, page: 1 });
  };

  render() {
    //  const { images, totalHits, isLoading } = this.state;
    const { handleSubmit } = this;
    return (
      <>
        <Searchbar onSubmit={handleSubmit} />
        {/* <ImageGallery></ImageGallery> */}
      </>
    );
  }
}
