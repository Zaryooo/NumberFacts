import React from 'react';

import classes from './FactsList.module.css';

const FactsList = (props) => {
  console.log(props.loadedFacts);

  // We do not need to use index for key in map - but in this case we only read the data without edit or delete from the list
  const loadFacts = props.loadedFacts.map((fact, index) => {
    return (
      <div key={index} className={classes.fact}>
        <div className={classes.numbers}>
          <p>
            <span>Number:</span>
            {fact.number}
          </p>
          <p>
            <span>Type:</span>
            {fact.type}
          </p>
        </div>
        <div className={classes.info}>
          <p>
            <span>Fact:</span> {fact.text}
          </p>
          <div className={classes.dates}>
            {fact.year && (
              <p>
                <span>Year:</span> {fact.year}
              </p>
            )}
            {fact.date && (
              <p>
                <span>Date:</span> {fact.date}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  });

  return <div className={classes.list}>{loadFacts}</div>;
};

export default FactsList;
