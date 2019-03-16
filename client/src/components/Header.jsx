import React from 'react';
import styles from '../styles/Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
  
  showDropdown() {
    return (
      <ul id={ styles.navmenu }>
        <li onClick={ this.clickHandler }><i className="fas fa-times" id={ styles.close }></i></li>
        <li onClick={ this.clickHandler }><a href="#"><i className="fas fa-home"></i> <span>Home</span></a></li>
        <li onClick={ this.clickHandler }><a href="#about"><i className="fas fa-user-circle"></i> <span>About</span></a></li>
        <li onClick={ this.clickHandler }><a href="#work"><i className="fas fa-code"></i> <span>Work</span></a></li>
        <li onClick={ this.clickHandler }><a href="#footer"><i className="fas fa-address-book"></i> <span>Contact</span></a></li>
      </ul>
    );
  }

  dimBackground() {
    return <div id={ styles.dimBG } onClick={ this.clickHandler }></div>
  }

  render() {
    return (
      <div className={ styles.container } id="nav">
        <div id={ styles.drawer } onClick={ this.clickHandler }>
          <a href="javascript:void(0);"><i className="fas fa-bars"></i></a>
        </div>
        
        <ul id={styles.navbar}>
          <li><a href="#"><i className="fas fa-home"></i> <span>Home</span></a></li>
          <li><a href="#about"><i className="fas fa-user-circle"></i> <span>About</span></a></li>
          <li><a href="#work"><i className="fas fa-code"></i> <span>Work</span></a></li>
          <li><a href="#footer"><i className="fas fa-address-book"></i> <span>Contact</span></a></li>
        </ul>

        { this.state.showMenu ? this.showDropdown() : null }
        { this.state.showMenu ? this.dimBackground() : null }
      </div>
    );
  };
}

export default Header;