import React, { Component } from 'react';

import css from './imageGalleryItem.module.css';

import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    const { image, onClick } = this.props;
    return (
      <li
        className={css.imageGalleryItem}
        onClick={() => onClick(image.largeImageURL)}
      >
        <img src={image.webformatURL} alt={image.tags} />
      </li>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
