import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import { ImageItems } from './ImageItems/ImageItems';

export const ImageGallery = ({ images, shouModal }) => {
  return (
    <Gallery>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageItems
          key={id}
          smallImageURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          shouModal={shouModal}
          ids={id}
        />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  shouModal: PropTypes.func.isRequired,
};
