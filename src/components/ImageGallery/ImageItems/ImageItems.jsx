import { Component } from 'react';
import { ImageItem, Image } from './ImageItems.styled';

export class ImageItems extends Component {
  shouModalElement = ({ target }) => {
    const imageURL = target.getAttribute('data-source');
    const altImage = target.getAttribute('alt');
    this.props.shouModal({ imageURL, altImage });
  };

  render() {
    const { smallImageURL, largeImageURL, tags } = this.props;
    const { shouModalElement } = this;

    return (
      <ImageItem onClick={shouModalElement}>
        <Image src={smallImageURL} data-source={largeImageURL} alt={tags} />
      </ImageItem>
    );
  }
}
