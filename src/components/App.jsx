import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { searchImages } from '../api/images';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
// import React from 'react';

const perPage = 12;

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [imageDetailsAlt, setImageDetailsAlt] = useState('');
  const [imageDetailsURL, setImageDetailsURL] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const FetchImages = async () => {
      try {
        setIsLoading(true);
        const {
          data: { totalHits, hits },
        } = await searchImages(query, page, perPage);
        const arrImages = hits.map(
          ({ id, webformatURL, largeImageURL, tags }) => ({
            id,
            webformatURL,
            largeImageURL,
            tags,
          })
        );
        const totalPapes = Math.ceil(totalHits / perPage);
        if (totalPapes > page) {
          setIsButtonLoading(true);
        } else {
          setIsButtonLoading(false);
        }
        setImages(imagesOld =>
          page === 1 ? arrImages : [...imagesOld, ...arrImages]
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      FetchImages();
    }
  }, [query, page]);

  const handleSubmit = q => {
    const queryCorrect = q.trim().split(' ').join('+');
    setQuery(queryCorrect);
    setPage(1);
  };

  const handleClickBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  const shouModal = ({ imageURL, altImage }) => {
    setModalOpen(true);
    setImageDetailsURL(imageURL);
    setImageDetailsAlt(altImage);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const isPosts = Boolean(images);

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {error && <p>{error}</p>}
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
};

App.propTypes = {};

export default App;
