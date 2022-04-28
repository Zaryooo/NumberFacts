import React from 'react';
import Header from './Header';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <div className={classes.wrapper}>
      <Header/>
      <main>
        <div className={classes.main}>{props.children}</div>
      </main>
    </div>
  );
};

export default Layout;
