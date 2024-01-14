import { createPortal } from 'react-dom';
import { Component } from 'react';
import { Overlay, ModaImg } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };

  render() {
    const { imageDetailsURL, imageDetailsAlt } = this.props;
    return createPortal(
      <Overlay onClick={this.closeModal}>
        <ModaImg>
          <img src={imageDetailsURL} alt={imageDetailsAlt} />
        </ModaImg>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
