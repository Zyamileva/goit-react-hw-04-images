import { Hourglass } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

import React from 'react';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    </LoaderWrapper>
  );
};
