import PropTypes from 'prop-types';
import {
  ImageGalleryItemSt,
  ImageGalleryItemImageSt,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, onclick }) => (
  <ImageGalleryItemSt id={image.id} onClick={onclick}>
    <ImageGalleryItemImageSt
      src={image.webformatURL}
      alt={image.tags}
      name={image.largeImageURL}
    />
  </ImageGalleryItemSt>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onclick: PropTypes.func.isRequired,
};
