import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.box}>
      {options.map(option => (
        <button
          className={css.btn}
          type="button"
          name={option.toLowerCase()}
          onClick={() => onLeaveFeedback(option.toLowerCase())}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
