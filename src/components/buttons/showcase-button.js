import React from 'react';
import propTypes from 'prop-types';

function ShowcaseButton(props) {
  const {buttonContent, onClick} = props;
  return (
    <button className="showcase-button" onClick={onClick}>
      {buttonContent}
    </button>
  );
}

ShowcaseButton.propTypes = {
  buttonContent: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired
};

export default ShowcaseButton;