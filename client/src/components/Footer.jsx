import React from 'react';
import styles from '../styles/Footer.scss';

const Footer = () => {
  return(
    <div className={styles.container} id="footer">
      <ul className={styles.links}>
        <li>
          <a href="https://github.com/aqcchin">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/amyqchin">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="mailto:aqqchin@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>

      <hr/>

      <p>©2018-2019 Amy Chin</p>
    </div>
  );
}


export default Footer;