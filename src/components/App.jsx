import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { searchImages } from '../api/images';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    perPage: 12,
    isLoading: false,
    isButtonLoading: false,
    imageDetailsAlt: '',
    imageDetailsURL: '',
    modalOpen: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (query && (prevState.query !== query || prevState.page !== page)) {
      this.setState({ images: [] });
      this.fetchPosts();
    }
  }

  async fetchPosts() {
    const { query, page, perPage } = this.state;
    try {
      this.setState({ isLoading: true });
      const { data: hits, data: totalHits } = await searchImages(
        query,
        page,
        perPage
      );

      const arrImages = hits.hits.map(
        ({ id, webformatURL, largeImageURL, tags }) => ({
          id,
          webformatURL,
          largeImageURL,
          tags,
        })
      );
      const totalPapes = Math.ceil(totalHits.totalHits / perPage);
      if (totalPapes > page) {
        this.setState({ isButtonLoading: true });
      } else {
        this.setState({ isButtonLoading: false });
      }

      this.setState(imagesOld => ({
        images:
          arrImages?.length === 1
            ? arrImages
            : [...imagesOld.images, ...arrImages],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleSubmit = query => {
    const queryCorrect = query.trim().split(' ').join('+');
    this.setState({ query: queryCorrect, page: 1 });
  };

  handleClickBtn = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  shouModal = ({ imageURL, altImage }) => {
    this.setState({
      modalOpen: true,
      imageDetailsURL: imageURL,
      imageDetailsAlt: altImage,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  };

  render() {
    const {
      images,
      isLoading,
      isButtonLoading,
      imageDetailsURL,
      imageDetailsAlt,
      modalOpen,
    } = this.state;
    const { handleSubmit, handleClickBtn, shouModal, closeModal } = this;
    const isPosts = Boolean(images);

    return (
      <>
        <Searchbar onSubmit={handleSubmit} />
        {isLoading && <Loader />}
        {isPosts && <ImageGallery images={images} shouModal={shouModal} />}
        {isButtonLoading && <Button onClickBtn={handleClickBtn} />}
        {modalOpen && (
          <Modal
            imageDetailsURL={imageDetailsURL}
            imageDetailsAlt={imageDetailsAlt}
            close={closeModal}
          />
        )}
      </>
    );
  }
}
