import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Overlay, ModaImg } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ close, imageDetailsURL, imageDetailsAlt }) => {
  useEffect(() => {
    document.addEventListener('keydown', this.closeModal);
    return () => document.removeEventListener('keydown', this.closeModal);
  }, []);

  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };

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
