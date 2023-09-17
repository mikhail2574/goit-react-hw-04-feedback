import React, { useState } from 'react';
import { Statistics } from '../Statistics/Statistics';
import css from './Form.module.css';

const Form = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function clickedBtn(evt) {
    let btnType = evt.target.getAttribute('data-type');
    switch (btnType) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log('not found');
    }
  }

  return (
    <>
      <div className={css.formContainer}>
        <h2>Please leave feedback</h2>
        <form className={css.form}>
          <button
            data-type="good"
            className={css.button}
            type="button"
            onClick={clickedBtn}
          >
            Good
          </button>
          <button
            data-type="neutral"
            className={css.button}
            type="button"
            onClick={clickedBtn}
          >
            Neutral
          </button>
          <button
            data-type="bad"
            className={css.button}
            type="button"
            onClick={clickedBtn}
          >
            Bad
          </button>
        </form>
      </div>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default Form;
