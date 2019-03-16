import React from 'react';
import styles from '../styles/Main.scss';
import About from './About.jsx';
import Works from './Works.jsx';
import Contact from './Contact.jsx';

const Main = () => {
  return (
    <div className={ styles.container }>
      <div className={ styles.cover }>
        <h1>Amy Chin</h1>
        <hr/>
        <p>Software Development</p>
        <a href="#main" id={ styles.arrow }><i className="fas fa-angle-down"></i></a>
      </div>

      <div className={ styles.wrapper } id="main">
        <About/>
        <Works/>
        {/* <Contact/> */}
      </div>
    </div>
  );
}


export default Main; 