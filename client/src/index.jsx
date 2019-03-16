import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/index.scss'
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div id={styles.root}>
        <Header id={styles.header}/>
        <Main id={styles.main}/>
        <Footer id={styles.footer}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));