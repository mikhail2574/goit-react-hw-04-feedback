import React, { useState } from 'react';
import { Statistics } from '../Statistics/Statistics';
import css from './Form.module.css';

const FeedbackType = {
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad',
};

const Form = () => {
  const [feedback, setFeedback] = useState({
    [FeedbackType.GOOD]: 0,
    [FeedbackType.NEUTRAL]: 0,
    [FeedbackType.BAD]: 0,
  });

  function clickedBtn(evt) {
    let type = evt.target.getAttribute('data-type');
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
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
      <Statistics
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
      />
    </>
  );
};

export default Form;
