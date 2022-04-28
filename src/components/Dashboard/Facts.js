import React, { useState } from 'react';

import FactsForm from './FactsForm';
import FactsList from './FactsList';

import classes from './Facts.module.css';

const Dash = () => {
  const [facts, setFacts] = useState([]);
  const [clearButton, setClearButton] = useState(false);
  const [httpError, setHttpError] = useState(null);


  const onSubmitHandler = (number, type) => {
    const fetchData = async () => {
      const response = await fetch(
        `http://numbersapi.com/${number}/${type}?json`
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();
      setFacts((prevState) => {
        return [responseData, ...prevState];
      });
      setClearButton(true);
    };

    fetchData().catch((error) => {
      setHttpError(error.message);
    });
  };

  const onClearHandler = () => {
    setFacts([]);
    setClearButton(false);
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <FactsForm onSubmitEvent={onSubmitHandler} />
      </div>
      <div className={classes.container}>
        <FactsList loadedFacts={facts} />
        {facts == '' && 'No facts'}
        {clearButton && <button className={classes['clr-button']} onClick={onClearHandler}>Clear Facts</button>}
        {httpError}
      </div>
    </React.Fragment>
  );
};

export default Dash;
