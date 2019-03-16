import React from 'react';
import styles from '../styles/About.scss';

const About = () => {
  return (
    <div className={styles.container} id="about">
      <h1>About</h1>

      <hr/>

      <div className={styles.content}>
        <p>
          Hi, my name is Amy. I am an aspiring full stack developer that loves 
          to design and create functional, responsive apps. I enjoy discovering 
          new technologies and methods for solving challenges through code. I'm 
          currently seeking opportunities to learn and hone my skills as a 
          software engineer.
        </p>

        <p>
          My skills range from JavaScript, CSS, and React on the front end to 
          Node.js, Express, and SQL databases on the back end. I can also pick up 
          new frameworks, programming languages, and technologies when needed for 
          a project. 
        </p>
      </div>

      {/* <p className={styles.link}>
        Learn more <i className="fas fa-angle-double-right"></i>
      </p> */}
    </div>
  );
}

export default About;