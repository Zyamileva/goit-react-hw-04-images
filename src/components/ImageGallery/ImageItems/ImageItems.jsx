import { ImageItem, Image } from './ImageItems.styled';
import PropTypes from 'prop-types';

export const ImageItems = ({
  smallImageURL,
  largeImageURL,
  tags,
  shouModal,
}) => {
  const shouModalElement = ({ target }) => {
    const imageURL = target.getAttribute('data-source');
    const altImage = target.getAttribute('alt');
    shouModal({ imageURL, altImage });
  };

  return (
    <ImageItem onClick={shouModalElement}>
      <Image src={smallImageURL} data-source={largeImageURL} alt={tags} />
    </ImageItem>
  );
};

ImageItems.propTypes = {
  smallImageURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  shouModal: PropTypes.func.isRequired,
};
