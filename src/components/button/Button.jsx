import React, { Component } from 'react';

import css from './button.module.css';

import PropTypes from 'prop-types';

const Button = ({ onClick, hasMore }) => {
  return (
    hasMore && (
      <button className={css.loadMoreButton} onClick={onClick}>
        Load more
      </button>
    )
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
