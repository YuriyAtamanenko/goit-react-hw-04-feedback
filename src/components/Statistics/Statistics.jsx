import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={css.box}>
      <p className={css.name}>
        Good <span className={css.value}>{good}</span>
      </p>
      <p className={css.name}>
        Neutral <span className={css.value}>{neutral}</span>
      </p>
      <p className={css.name}>
        Bad <span className={css.value}>{bad}</span>
      </p>

      <p className={css.name}>
        Total <span className={css.value}>{total}</span>
      </p>
      <p className={css.name}>
        Positive feedback{' '}
        <span className={css.value}>
          {positivePercentage ? positivePercentage : 0}%
        </span>
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
