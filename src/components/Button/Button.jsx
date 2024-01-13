import React from 'react';
import { ButtonStyle, ButtonWrapper } from './Button.styled';

export const Button = ({ onClickBtn }) => {
  return (
    <ButtonWrapper>
      <ButtonStyle type="button" onClick={onClickBtn}>
        Load more
      </ButtonStyle>
    </ButtonWrapper>
  );
};
