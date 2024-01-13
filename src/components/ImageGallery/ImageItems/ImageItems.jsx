import React from 'react';
import { ImageItem, Image } from './ImageItems.styled';

export const ImageItems = ({ id, smallImageURL, largeImageURL, tags }) => {
  //   const { smallImageURL, tags } = this.props;
  return (
    <ImageItem>
      <Image src={smallImageURL} alt={tags} />
    </ImageItem>
  );
};
