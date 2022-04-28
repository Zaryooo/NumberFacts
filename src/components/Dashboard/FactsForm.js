import React, { useState } from 'react';

import classes from './FactsForm.module.css';

const Dash = (props) => {
  const [number, setNumber] = useState('');
  const [type, setType] = useState('date');
  const [inputError, setInputError] = useState(false);
  const [firstClick, setFirstClick] = useState(false);

  const onNumberHandler = (e) => {
    setNumber((v) => (e.target.validity.valid ? e.target.value : v));
    setInputError(false);
    setFirstClick(false);
  };
  const onSelectHandler = (event) => {
    setType(event.target.value);
    setFirstClick(false);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (number === '') {
      setInputError(true);
      return;
    }
    props.onSubmitEvent(number, type);
    setFirstClick(true);
  };

  return (
    <div className={classes['form-facts']}>
      <h2>Enter a number and then select type</h2>
      <form onSubmit={onSubmitHandler} className={classes.form}>
        <div className={classes.inputs}>
          <div className={classes.input}>
            <label>Number:</label>
            <input
              pattern="[0-9]*"
              value={number}
              placeholder="Enter Number"
              type="text"
              onChange={onNumberHandler}
            />
            <div className={classes.error}>
              {inputError && <p>Please enter a number</p>}
            </div>
          </div>
          <div className={classes.input}>
            <label>Type:</label>
            <select id="type" name="type" onChange={onSelectHandler}>
              <option value="date">Date</option>
              <option value="year">Year</option>
              <option value="trivia">Trivia</option>
              <option value="math">Math</option>
            </select>
          </div>
        </div>
        <button>
          {!firstClick && 'Get Facts'}
          {firstClick && 'More Facts'}
        </button>
      </form>
    </div>
  );
};

export default Dash;
