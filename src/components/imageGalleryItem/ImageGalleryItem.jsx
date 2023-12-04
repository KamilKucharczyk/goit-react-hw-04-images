import React from 'react';

import css from './imageGalleryItem.module.css';

import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li
      className={css.imageGalleryItem}
      onClick={() => onClick(image.largeImageURL)}
    >
      <img src={image.webformatURL} alt={image.tags} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
