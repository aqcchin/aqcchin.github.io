import React from 'react';
import styles from '../styles/Works.scss';

const Works = () => {
  return (
    <div className={styles.container} id="work">
      <h1>Work</h1>

      <hr/>

      <div id={ styles.grid }>
        <div className={ styles.panel }>
          <h2>Mockstarter</h2>
          <p className={ styles.description }>
            Kickstarter front end mock-up that emulates the form and function of a campaign details page.
          </p>
          <img src="../dist/assets/mockstarter-1.png"/>
        </div>

        <div className={ styles.panel }>
          <h2>MocKEA</h2>
          <p className={ styles.description }>
            Ikea product page back end mock-up that is optimized and stress-tested to handle high user traffic.
          </p>
          <img src="../dist/assets/mockea-1.png"/>
        </div>

        <div className={ styles.panel }>
          <h2>Weather App</h2>
          <p className={ styles.description }>
            A simple weather app utilizing the OpenWeatherMap API.
          </p>
          <img src="../dist/assets/weather-app-1.png"/>
        </div>
      </div>
    </div>
  );
}

export default Works;