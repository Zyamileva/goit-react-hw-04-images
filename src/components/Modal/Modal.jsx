import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Overlay, ModaImg } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ close, imageDetailsURL, imageDetailsAlt }) => {
  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => document.removeEventListener('keydown', closeModal);
  });

  return createPortal(
    <Overlay onClick={closeModal}>
      <ModaImg>
        <img src={imageDetailsURL} alt={imageDetailsAlt} />
      </ModaImg>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  imageDetailsURL: PropTypes.string.isRequired,
  imageDetailsAlt: PropTypes.string.isRequired,
};
