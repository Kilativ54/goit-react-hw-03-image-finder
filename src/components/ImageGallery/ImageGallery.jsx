import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryListSt } from './ImageGallery.styled';

export const ImageGallery = ({ images, onImageClick }) => (
  <ImageGalleryListSt>
    {images.map((image, index) => (
      <ImageGalleryItem onclick={onImageClick} image={image} key={index} />
    ))}
  </ImageGalleryListSt>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  onImageClick: PropTypes.func.isRequired,
};
