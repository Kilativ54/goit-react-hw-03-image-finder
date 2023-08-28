import PropTypes from 'prop-types';
import { ModalBackdrop, ModalStyles } from './Modal.styled';

export const Modal = ({ src, alt, handleClose }) => (
  <ModalBackdrop onClick={handleClose}>
    <ModalStyles>
      <img src={src} alt={alt} />
    </ModalStyles>
  </ModalBackdrop>
);

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};
