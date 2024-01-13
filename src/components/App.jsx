import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { searchImages } from '../api/images';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends React.Component {
  state = {
    query: '',
    images: [],
    page: 1,
    // totalHits: 0,
    isLoading: false,
  };

  componentDidUpdate(prevProrps, prevState) {
    const { query, page } = this.state;
    if (query && (prevState.query !== query || prevState.page !== page)) {
      this.fetchPosts();
    }
  }

  async fetchPosts() {
    const { query, page } = this.state;
    try {
      this.setState({ isLoading: true });
      // totalHits;
      const { data: hits } = await searchImages(query, page);

      const arrImages = hits.hits.map(
        ({ id, webformatURL, largeImageURL, tags }) => ({
          id,
          webformatURL,
          largeImageURL,
          tags,
        })
      );

      console.log('ar', arrImages);

      this.setState(imagesOld => ({
        images: arrImages?.length
          ? [...imagesOld.images, ...arrImages]
          : imagesOld,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleSubmit = query => {
    this.setState({ query, page: 1 });
  };

  handleClickBtn = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { images, isLoading } = this.state;
    console.log('image render', images);
    const { handleSubmit, handleClickBtn } = this;
    const isPosts = Boolean(images);
    console.log(isPosts);
    return (
      <>
        <Searchbar onSubmit={handleSubmit} />
        {isLoading && <Loader />}
        {isPosts && <ImageGallery images={images} />}
        <Button onClickBtn={handleClickBtn} />
      </>
    );
  }
}
